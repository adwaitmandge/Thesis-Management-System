import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { tododata } from "../data/tododata";
import { useDisclosure } from "@chakra-ui/hooks";
import { ChatState } from "../Context/ChatProvider";
import { ButtonGroup } from "@mui/material";
import DeleteModal from "./miscellaneous/DeleteModal";
import UpdateModal from "./miscellaneous/UpdateModal";

const ToDo = ({ toDo, markDone, updateTask, deleteTask }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const { user } = ChatState();
  console.log(user);
  console.log(toDo);
  return (
    <>
      {toDo
        ?.sort((a, b) => (a._id > b._id ? 1 : -1))
        .map((task, index) => {
          const { isCompleted, creator } = task;
          console.log("Is user._id === creator", user._id === creator);
          return (
            <React.Fragment key={task._id}>
              <div className="col bg-gray-100 rounded-[6px] mb-[20px] pt-[10px] pr-[140px] pl-[10px] pb-[15px] text-center text-[22px] relative flex">
                <div
                  className={task.isCompleted ? "flex line-through ..." : ""}
                >
                  <div className="flex items-center">
                    <span className="text-[#999] rounded-[50%] w-[26px] h-[26px] flex text-center text-[18px] mr-[8px] justify-center items-center ">
                      {index + 1}
                    </span>
                    <span className="flex">{task.task}</span>
                  </div>
                </div>
                <div className="absolute top-[50%] -translate-y-[50%] ... right-[15px] inline-block">
                  <button
                    className="inline-block text-[#00ff89] pointer-events-auto mr-[20px] mb-[10px] hover:text-[#ff5e00]"
                    title="Completed / Not Completed"
                    onClick={(e) => markDone(task)}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </button>

                  {user._id === task.creator && (
                    <span
                      className={`mr-[20px] cursor-pointer`}
                      title="Edit"
                      onClick={() => setShowUpdateModal(true)}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}

                  {user._id === task.creator && (
                    <Button
                      className={`mr-[20px] cursor-pointer `}
                      title="Delete"
                      onClick={() => setShowDeleteModal(true)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </Button>
                  )}
                </div>
              </div>
              <DeleteModal
                isVisible={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                deleteTask={deleteTask}
                task={task}
              />

              <UpdateModal
                isVisible={showUpdateModal}
                onClose={() => setShowUpdateModal(false)}
                updateTask={updateTask}
                task={task}
              />
            </React.Fragment>
          );
        })}
    </>
  );
};

export default ToDo;
