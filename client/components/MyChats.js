import { ChatState } from "../Context/ChatProvider";
import { Box, useToast, Button, Stack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { getSender } from "../config/ChatLogics";
import axios from "axios";
import GroupChatModal from "./miscellaneous/GroupChatModal";

const MyChats = ({fetchAgain}) => {
  const [loggedUser, setLoggedUser] = useState();
  const { user, chats, setChats, selectedChat, setSelectedChat } = ChatState();
  const toast = useToast();

  const fetchChats = async () => {
    // console.log(user._id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(
        "http://localhost:5000/api/chat",
        config
      );
      console.log(data);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, [fetchAgain]);

  return (
    <Box
      className={`${
        selectedChat ? "hidden" : "flex"
      } md:flex flex-col items-center p-3 bg-white rounded-lg border w-[100%] md:w-[31%]`}
      //   d={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      //   flexDir="column"
      //   alignItems="center"
      //   p={3}
      //   bg="white"
      //   w={{ base: "100%", md: "31%" }}
      //   borderRadius="lg"
      //   borderWidth="1px"
    >
      <Box
        className="flex w-[100%] justify-between items-center pb-3 px-3 font-sans text-[28px] md:text-[30px]"
        // pb={3}
        // px={3}
        // fontSize={{ base: "28px", md: "30px" }}
        // fontFamily="Work sans"
        // d="flex"
        // w="100%"
        // justifyContent="space-between"
        // alignItems="center"
      >
        My Chats
        <GroupChatModal>
        <Button
          className={`flex text-[17px] md:text-[10px] lg:text-[17px]`}
          //   d="flex"
          //   fontSize={{ base: "17px", md: "10px", lg: "17px" }}
          rightIcon={<AddIcon />}
        >
          New Group Chat
        </Button>
        </GroupChatModal>
      </Box>
      <Box
        className="flex flex-col p-3 bg-[f8f8f8] rounded-lg overflow-y-hidden w-[100%]"
        // d="flex"
        // flexDir="column"
        // p={3}
        // bg="#F8F8F8"
        // w="100%"
        // h="100%"
        // borderRadius="lg"
        // overflowY="hidden"
      >
        {chats ? (
          <Stack overflowY="scroll">
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
              >
                <Text>
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
                {chat.latestMessage && (
                  <Text fontSize="xs">
                    <b>{chat.latestMessage.sender.name} : </b>
                    {chat.latestMessage.content.length > 50
                      ? chat.latestMessage.content.substring(0, 51) + "..."
                      : chat.latestMessage.content}
                  </Text>
                )}
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
