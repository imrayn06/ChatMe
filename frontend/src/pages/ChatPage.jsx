import MyChats from "../components/MyChats.jsx";
import SideDrawer from "../components/miscellaneous/SideDrawer.jsx";
import { ChatState } from "../Context/ChatProvider.jsx";
import { Box } from "@chakra-ui/react";
import ChatBox from "../components/ChatBox.jsx";
import { useState } from "react";

const ChatPage = () => {
  const { user } = ChatState();
  // console.log(user);
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}

      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="90vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain}  />}
        {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
      </Box>
    </div>
  );
};

export default ChatPage;
