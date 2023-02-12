import { useState, useEffect } from "react";
import AddTaskModal from "./miscellaneous/AddTaskModal";
import { ChatState } from "../Context/ChatProvider";
import { RSC_MODULE_TYPES } from "next/dist/shared/lib/constants";
import { useRouter } from "next/router";

const ProfessorView = () => {
  const { user } = ChatState();
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});

  const getStudents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/professor", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await res.json();
      console.log(data);
      setStudents(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const taskCreationHandler = async (task, student) => {
    if (!task.task) {
      console.log("Cannot assign an empty task");
      return;
    }

    const body = {
      task,
      student,
    };

    console.log("Before sending post request");
    const res = await fetch("http://localhost:5000/api/professor/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(body),
    });

    console.log("After sending post request");
    const data = await res.json();
    console.log(data);
  };

  const modalHandler = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        {students.map((student) => {
          const randomNum = Math.floor(Math.random() * 4) + 1;
          const { _id: id } = student;
          return (
            <div
              class="max-w-[300px] rounded overflow-hidden shadow-lg m-3 cursor-pointer"
              onClick={() => {
                router.push(`professor/${id}`);
              }}
            >
              <img
                class="w-full h-[50%]"
                src={`http://localhost:8080/img${randomNum}.jpg`}
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{student.name}</div>
                <p class="text-gray-700 text-base">{student.fieldOfInterest}</p>
                <button
                  type="button"
                  class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  onClick={() => modalHandler(student)}
                >
                  Assign Task
                </button>
              </div>
              {showModal && (
                <AddTaskModal
                  student={selectedStudent}
                  taskCreationHandler={taskCreationHandler}
                  isVisible={showModal}
                  onClose={() => setShowModal(false)}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProfessorView;
