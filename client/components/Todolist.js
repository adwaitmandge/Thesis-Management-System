import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import UpdateForm from "./UpdateForm";
import ToDo from "./ToDo";
import { tododata } from "../data/tododata";
import LinearProgress from "@mui/material/LinearProgress";

import "bootstrap/dist/css/bootstrap.min.css";
import LinearWithValueLabel, {
  lineprogresswithlabel,
} from "./linearprogresswithlabel";

function Todolist() {
  const [toDo, setToDo] = useState(tododata);
  const [count, setcount] = useState(0);
  const [percent, setpercent] = useState(0);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add task
  ///////////////////////////
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setpercent((count / (toDo.length + 1)) * 100);
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // Delete task
  ///////////////////////////
  const deleteTask = (id) => {
    const foundTask = toDo.find((task) => task.id === id);
    if (foundTask.complete) {
      let newTasks = toDo.filter((task) => task.id !== id);
      setpercent(((count - 1) / (toDo.length - 1)) * 100);
      setcount(count - 1);
      setToDo(newTasks);
    } else {
      let newTasks = toDo.filter((task) => task.id !== id);
      setpercent((count / (toDo.length - 1)) * 100);
      setToDo(newTasks);
    }
  };

  // Mark task as done or completed
  ///////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        task.complete = true;
        setpercent(((count + 1) / toDo.length) * 100);
        setcount(count + 1);
        return { ...task, status: !task.status };
      }

      return task;
    });
    setToDo(newTask);
  };

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // Change task for update
  ///////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // Update task
  ///////////////////////////
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };
  console.log("this is count ", count);
  console.log("todo length ", toDo.length);
  console.log("the percentage is ", percent);
  console.log("this is percentage ", (count / (toDo.length - count)) * 100);
  // setpercent((count / toDo.length) * 100);
  return (
    <>
      <div className="flex flex-col w-[100%]">
        <div className="w-[100%] h-[100%]">
          <div className="bg-gray-200">
            <div className=" p-6 flex flex-col md:space-y-[2%]">
              <span>Personal Progress</span>
              <LinearProgress variant="determinate" value={percent} />
            </div>
            <div className="p-6 flex flex-col md:space-y-[2%]">
              <span>Assignment Progress</span>
              <LinearProgress variant="determinate" value={percent} />
            </div>
          </div>
        </div>
        <div className="text-center  bg-slate-200 w-[100%]">
          <div className="container text-center ">
            <br />
            <br />
            <h2 className="w">To Do List</h2>
            <br />
            <br />

            {updateData && updateData ? (
              <UpdateForm
                updateData={updateData}
                changeTask={changeTask}
                updateTask={updateTask}
                cancelUpdate={cancelUpdate}
              />
            ) : (
              <AddTaskForm
                newTask={newTask}
                setNewTask={setNewTask}
                addTask={addTask}
              />
            )}

            {/* Display ToDos */}

            {toDo && toDo.length ? "" : "No Tasks..."}

            <ToDo
              toDo={toDo}
              markDone={markDone}
              setUpdateData={setUpdateData}
              deleteTask={deleteTask}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Todolist;