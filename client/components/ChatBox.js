import { Box } from "@chakra-ui/layout";
// import "./styles.css";
import SingleChat from "./SingleChat";  
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      className={`${
        selectedChat ? "flex" : "hidden"
      } md:flex flex-col items-center bg-white w-[100%] md:w-[68%] rounded-lg border`}
    //   d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
    //   alignItems="center"
    //   flexDir="column"
    //   p={3}
    //   bg="white"
    //   w={{ base: "100%", md: "68%" }}
    //   borderRadius="lg"
    //   borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
