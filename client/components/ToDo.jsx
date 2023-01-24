import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { tododata } from "../data/tododata";

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            const {complete} = task;
            return (
              <React.Fragment key={task.id}>
                <div className="col bg-gray-100 rounded-[6px] mb-[20px] pt-[10px] pr-[140px] pl-[10px] pb-[15px] text-center text-[22px] relative flex">
                  <div className={task.status ? "flex line-through ..." : ""}>
                    <div className="flex items-center">
                      <span className="text-[#999] rounded-[50%] w-[26px] h-[26px] flex text-center text-[18px] mr-[8px] justify-center items-center ">
                        {index + 1}
                      </span>
                      <span className="flex">{task.title}</span>
                    </div>
                  </div>
                  <div className="absolute top-[50%] -translate-y-[50%] ... right-[15px] inline-block">
                    <button disabled={complete}
                      className="inline-block text-[#00ff89] pointer-events-auto mr-[20px] mb-[10px] hover:text-[#ff5e00]"
                      title="Completed / Not Completed"
                      onClick={(e) => markDone(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </button>

                    {task.status ? null : (
                      <span
                        className="mr-[20px]"
                        title="Edit"
                        onClick={() =>
                          setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}

                    <span
                      className="mr-[20px] "
                      title="Delete"
                      onClick={() => deleteTask(task.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default ToDo;