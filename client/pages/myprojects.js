import react, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Link, useToast } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import UploadModal from "../components/miscellaneous/UploadModal";
import EditModal from "../components/miscellaneous/EditModal";
import { supabase } from "../config/supabaseClient";

const uploads = () => {
  const { user } = ChatState();

  const router = useRouter();
  const toast = useToast();

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [allThesis, setAllThesis] = useState([]);
  const [selectedThesis, setSelectedThesis] = useState({});
  const [thesis, setThesis] = useState({
    title: "",
    professor: "",
    student: "",
    path: "",
    status: "",
  });

  const editHandler = async (e) => {
    let file;
    if (e.target.files) {
      file = e.target.files[0];
    }

    console.log("Inside edit at the frontend");
    // empty title
    try {
      const { data, error } = await supabase.storage
        .from("thesis")
        .update(`${user.name}/` + selectedThesis.title, file);

      if (data) {
        console.log(data);
        toast({
          title: "File Uploaded Successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        console.log("File Updated at Supabase Successfully");
      } else if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const statusHandler = async (id, newStatus) => {
    if (!newStatus) {
      console.log("Please fill the status");
      return;
    }

    const body = {
      newStatus,
      id,
    };
    console.log("The new status is", newStatus);

    try {
      console.log("About to send a put request");

      const res = await fetch("http://localhost:5000/api/thesis/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      console.log(data);

      setAllThesis(data);
      console.log("After the put request");
      console.log("After editing status at the frontend");
      setSelectedThesis({});
      setShowEditModal(false);
    } catch (error) {
      console.log("Error occurred while updating status at the frontend");
      console.log(error);
    }
  };

  const handleUpload = async (e) => {
    let file;
    if (e.target.files) {
      file = e.target.files[0];
    }

    console.log("Inside upload at the frontend");
    // empty title
    if (!thesis.title || !thesis.professor) {
      console.log("Thesis title and professor cannot be empty");
    }

    try {
      const { data, error } = await supabase.storage
        .from("thesis")
        .upload(`${user.name}/` + thesis.title, file);

      if (data) {
        console.log(data);
        toast({
          title: "File Uploaded Successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        console.log("File Uploaded to Supabase Successfully");
      } else if (error) {
        console.log(error);
      }

      try {
        const res = await fetch("http://localhost:5000/api/thesis/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
          body: JSON.stringify(thesis),
        });

        const data = await res.json();
        console.log(data);
        setAllThesis(data);
        console.log("Thesis uploaded at the backend successfully");
      } catch (err) {
        console.error(err.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const feedbackHandler = (id) => {
    router.push(`/thesis/feedback/${id}`);
  };

  const downloadFiles = async (fileName, path) => {
    console.log("The filename is ", fileName, "The path is", path);
    try {
      console.log("Inside download files at the frontend");
      console.log("About to send a get request");

      const res = await fetch(
        `http://localhost:5000/api/uploads?fileName=${fileName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
            path: path,
          },
        }
      );

      console.log("After the req");
      console.log(res);

      const data = await res.json();

      console.log(data);
      toast({
        title: "File Downloaded",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.log("ERROR OCCURRED WHILE FETCHING FILES");
      console.log(error);
    }
  };

  const getDataFromBackend = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/thesis", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await res.json();
      console.log(data);
      setAllThesis(data);
    } catch (err) {
      console.log("Error occurred while getting data from the backend");
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDataFromBackend();
  }, [user]);

  //   className="flex min-h-scree flex-col items-center justify-center py-2 "
  return (
    <>
      <h1 className="flex justify-start m-3 text-2xl font-semibold text-blue-800">
        Digital Thesis Repository
      </h1>
      <div class="relative flex justify-center items-center overflow-x-auto rounded overflow-hidden shadow-lg m-3 mt-10 cursor-pointer">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Thesis Name
              </th>
              <th scope="col" class="px-6 py-3">
                student
              </th>
              <th scope="col" class="px-6 py-3">
                Professor
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Review
              </th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {allThesis?.map((data) => {
              console.log("The thesis is", data);
              return (
                <tr
                  key={data._id}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <span onClick={() => downloadFiles(data.title, data.path)}>
                      {data.title}
                    </span>
                  </th>
                  <td class="px-6 py-4">{data?.creator_student?.name}</td>
                  <td class="px-6 py-4">{data?.professor?.name}</td>
                  <td class="px-6 py-4">{data.status}</td>
                  <td
                    class="px-6 py-4"
                    onClick={() => feedbackHandler(data._id)}
                  >
                    {user.role == "Student" ? "View Feedback" : "Send Feedback"}
                  </td>
                  <td
                    class="px-6 py-4 text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      setSelectedThesis(data);
                      setShowEditModal(true);
                    }}
                  >
                    Edit
                  </td>
                  {showEditModal && (
                    <EditModal
                      isVisible={showEditModal}
                      thesis={selectedThesis}
                      editHandler={editHandler}
                      statusHandler={statusHandler}
                      onClose={() => setShowEditModal(false)}
                    />
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-[3%] flex justify-center">
        <hr />
        <button
          type="button"
          className=" text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 justify-center"
          onClick={(e) => {
            setShowModal(true);
          }}
        >
          Upload Thesis
        </button>
      </div>
      {showModal && (
        <UploadModal
          isVisible={showModal}
          thesis={thesis}
          setThesis={setThesis}
          handleUpload={handleUpload}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default uploads;
