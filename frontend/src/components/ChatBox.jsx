import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider.jsx";
import React from "react";
import SingleChat from "./SingleChat.jsx";

const ChatBox = ({fetchAgain, setFetchAgain}) => {
  const { selectedChat } = ChatState();
  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      borderColor="rgb(14, 209, 134)"
      bg="rgba(255, 255, 255, 0.91)"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="2px"
      
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;
