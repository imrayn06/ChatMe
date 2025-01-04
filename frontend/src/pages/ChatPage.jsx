import MyChats from "../components/MyChats.jsx";
import SideDrawer from "../components/miscellaneous/SideDrawer.jsx";
import { ChatState } from "../Context/ChatProvider.jsx";
import { Box } from "@chakra-ui/react";
import ChatBox from "../components/ChatBox.jsx";

const ChatPage = () => {
  const { user } = ChatState();
  console.log(user)

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}

      <Box
      display="flex"
      justifyContent="space-between"
      w='100%'
      h='90vh'
      p='10px'>
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
