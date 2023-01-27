import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import React, { useState } from "react";

const ChatPage = () => {
  const { user } = ChatState();
  console.log(user);
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div className="w-[100%] bg-gray-200">
      {user && <SideDrawer />}
      <Box
        d="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
        className="flex justify-between w-[100%] h-[91.5vh] p-[10px]"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
