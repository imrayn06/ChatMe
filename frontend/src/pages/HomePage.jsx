import { useNavigate } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import {
  Box,
  Container,
  Tabs,
  Text,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  background,
} from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      //if the user is already logged in
      navigate("/");
    }
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent display="flex" justifyContent="center">
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={"rgba(42, 227, 165, 0.95)"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="2xl"
        borderWidth="5px"
      >
        <Text
          fontSize="4xl"
          fontFamily="Work sans"
          color="black"
          fontWeight="bold"
          // fontWeight={700}
        >
          😜ChatMe
        </Text>
      </Box>
      <Box
        bg="rgba(42, 227, 165, 0.86) "
        w="100%"
        borderRadius="2xl"
        borderWidth="5px"
        p={4}
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab borderRadius="2xl" borderWidth="5px" fontWeight={700}>
              Login
            </Tab>
            <Tab borderRadius="2xl" borderWidth="5px" fontWeight={700}>
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
