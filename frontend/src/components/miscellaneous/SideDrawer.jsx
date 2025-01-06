import {
  Box,
  Button,
  Tooltip,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  MenuItem,
  MenuDivider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ChatState } from "../../Context/ChatProvider.jsx";
import Profile from "./Profile.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ChatLoading from "../ChatLoading.jsx";
import UserListItem from "../UserAvatar/UserListItem.jsx";
import { getSender, getSenderDetails } from "../../config/ChatLogics.jsx";

const SideDrawer = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  const {
    user,
    setSelectedChat,
    chats,
    setChats,
    notification,
    setNotification,
  } = ChatState();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logOutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const toast = useToast();

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please enter something to search !",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }
    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(
        `${apiUrl}/api/user?search=${search}`,
        config
      );

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(
        `${apiUrl}/api/chat`,
        { userId },
        config
      );
      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);

      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error loading the chat !",
        description: error.message,
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5 px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search User to chat..." hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <Text display={{ base: "none", md: "flex" }} px="4">
              Search Contacts
            </Text>
          </Button>
        </Tooltip>
        <Text>😜ChatMe</Text>
        <div>
          <Menu>
            <MenuButton p={1} style={{ position: "relative" }}>
              <BellIcon fontSize="2xl" m={1} />
              {notification && notification.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "2px",
                    right: "4px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "1.5px 5px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {notification.length}
                </span>
              )}
            </MenuButton>
            <MenuList pl={2} bg="green.100">
              {!notification.length && "No new messages. "}
              {notification.map((notify) => (
                <MenuItem
                  bg="green.100"
                  key={notify._id}
                  onClick={() => {
                    setSelectedChat(notify.chat);
                    setNotification(notification.filter((n) => n !== notify));
                  }}
                >
                  {notify.chat.isGroupChat
                    ? `New Message in ${notify.chat.chatName}`
                    : `New Message from ${getSender(user, notify.chat.users)}`}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <Profile user={user}>
                <MenuItem>My Profile</MenuItem>
              </Profile>
              <MenuDivider />
              <MenuItem onClick={logOutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Contacts</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Search</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}

            {loadingChat && <Spinner ml="auto" display="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
