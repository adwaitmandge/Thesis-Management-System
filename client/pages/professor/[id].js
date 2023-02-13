import { useState, useEffect } from "react";
import ToDo from "../../components/assignedTasks";
import LinearProgress from "@mui/material/LinearProgress";
import { useToast } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { calcLength } from "framer-motion";
import { ChatState } from "../../Context/ChatProvider";
import AddTaskModal from "../../components/miscellaneous/AddTaskModal";

const StudentView = () => {
  const { user } = ChatState();
  console.log(user);
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const toast = useToast();
  const [toDo, setToDo] = useState([]);
  const [count, setcount] = useState(0);
  const [percent, setpercent] = useState(0);
  const [personalProgress, setPersonalProgress] = useState(0);
  const [assignedTasksProgress, setAssignedTasksProgress] = useState(0);
  const [personalTasks, setPersonalTasks] = useState([]);
  const [assignedTasks, setAssignedTasks] = useState([]);
  const [personalCount, setPersonalCount] = useState(0);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  // Temp State
  const [newTask, setNewTask] = useState({
    task: "",
    isCompleted: false,
    deadline: "",
  });

  const calculateAssignedProgress = (tasks) => {
    let count = 0;

    tasks?.map((task) => {
      // professor is the creator of the task
      if (task.assigned_to == task.creator) {
      } else {
        if (task.isCompleted) count++;
      }
    });

    setAssignedTasksProgress((count / tasks.length) * 100);
  };

  //////////////////////////// FETCH ALL TASKS //////////////////////////////////

  const getGoals = async () => {
    console.log("Inside the get goals route");
    try {
      const res = await fetch("http://localhost:5000/api/professor/goals", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
          id: id,
        },
      });
      console.log("Fetching goals");
      const data = await res.json();
      setToDo(data);
      console.log(data);

      const temp1 = [];
      const temp2 = [];
      data.map((task) => {
        if (task.assigned_to == task.creator) {
          temp1.push(task);
        } else {
          temp2.push(task);
        }
      });

      console.log(temp2);
      calculateAssignedProgress(temp2);

      setAssignedTasks(temp2);
    } catch (err) {
      console.error(err.message);
    }
  };

  //////////////////////////////// ADD TASK /////////////////////////////////////////////////////

  const taskCreationHandler = async (newTask, id) => {
    if (!newTask.task) {
      console.log("Cannot assign an empty task");
      return;
    }

    const body = {
      newTask,
      id,
    };

    console.log(body);

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

    setToDo(data);

    const temp1 = [];
    const temp2 = [];
    data.map((task) => {
      if (task.assigned_to == task.creator) {
        temp1.push(task);
      } else {
        temp2.push(task);
      }
    });

    console.log(temp2);
    calculateAssignedProgress(temp2);
    setAssignedTasks(temp2);

    setShowAddTaskModal(false);
  };

  //////////////////////////////// UDPATE TASK /////////////////////////////////////////////////////
  const updateTask = async (task, newTitle, date, time) => {
    console.log(newTitle);
    if (!newTitle) {
      toast({
        title: "Please enter something",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    const body = { task, newTitle, id, date, time };

    try {
      const res = await fetch("http://localhost:5000/api/professor/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setToDo(data);

      const temp1 = [];
      const temp2 = [];
      data.map((task) => {
        if (task.assigned_to == task.creator) {
          temp1.push(task);
        } else {
          temp2.push(task);
        }
      });

      console.log(temp2);
      calculateAssignedProgress(temp2);

      setAssignedTasks(temp2);
    } catch (err) {
      console.error(err.message);
    }
  };

  //////////////////////////////// DELETE TASK /////////////////////////////////////////////////////

  const deleteTask = async (task) => {
    const body = {
      task,
      id,
    };

    try {
      console.log("About to send a delete request");
      const res = await fetch("http://localhost:5000/api/professor", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setToDo(data);

      const temp1 = [];
      const temp2 = [];
      data.map((task) => {
        if (task.assigned_to == task.creator) {
          temp1.push(task);
        } else {
          temp2.push(task);
        }
      });

      console.log(temp2);
      calculateAssignedProgress(temp2);

      setAssignedTasks(temp2);
    } catch (error) {
      console.log("ERROR OCCURRED WHILE DELETING GOALS");
      console.log(error.message);
    }
  };

  useEffect(() => {
    getGoals();
  }, [user, router.isReady]);

  return (
    <>
      <div className="flex flex-col w-[100%]">
        <div className="w-[100%] h-[100%]">
          <div className="bg-gray-200">
            <div className="p-6 flex flex-col md:space-y-[2%]">
              <span>Assignment Progress</span>
              <LinearProgress
                variant="determinate"
                value={assignedTasksProgress}
              />
            </div>
          </div>
        </div>
        <div className="text-center  bg-slate-200 w-[100%]">
          <div className="container text-center ">
            <br />
            <br />
            <h2 className="w">Tasks</h2>
            <br />
            <br />

            {/* Adding a Task  */}
            <div className="row">
              <div className="col">
                <input
                  name="task"
                  placeholder="Assign a task.."
                  value={newTask.task}
                  onChange={(e) =>
                    setNewTask({ ...newTask, [e.target.name]: e.target.value })
                  }
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-lg btn-success"
                  onClick={() => {
                    setShowAddTaskModal(true);
                  }}
                >
                  Add Task
                </button>
              </div>
            </div>
            <br />

            {/* Display ToDos */}

            {toDo && toDo.length ? "" : "No Tasks..."}

            <ToDo
              toDo={assignedTasks}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          </div>
          {showAddTaskModal && (
            <AddTaskModal
              student={id}
              taskCreationHandler={taskCreationHandler}
              isVisible={showAddTaskModal}
              onClose={() => setShowAddTaskModal(false)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default StudentView;
