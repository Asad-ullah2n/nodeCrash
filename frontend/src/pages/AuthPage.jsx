import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useUserStore } from "../store/user";
import { useNavigate } from "react-router-dom";
const AuthPage = () => {
  const [isLoginScreen, setIsLoginScreen] = useState("Sign Up");
  console.log('isLoginScreen', isLoginScreen);
  
  const toast = useToast();
  const [value, setValue] = useState({ username: "", email: "", password: "" });
  const bg = useColorModeValue("white", "gray.700");
  const { createUser, signInUser } = useUserStore();
  const navigate = useNavigate();

  const loginHandler = async () => {
    const { success, message } = await signInUser(value);
    console.log('Login successful', success, message);
    

    if (success) {
      
      toast({
        title: message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      // navigate("/home");
    } else {
      toast({
        title: message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };
  const signUpHandler = async () => {
    const { success, message } = await createUser(value);

    if (success) {
      toast({
        title: message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      // navigate("/home");
    } else {
      toast({
        title: message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };
  const signUp = () => (
    <VStack spacing={6}>
      <Heading as={"h3"} textAlign="center">
        <Text
          fontSize={{ base: 18, sm: 24 }}
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          {isLoginScreen}
        </Text>
      </Heading>
      {isLoginScreen === "Sign Up" ? (
        <>
          <Input
            placeholder="Username"
            value={value.username}
            onChange={(e) => setValue({ ...value, username: e.target.value })}
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Password"
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
        </>
      ) : (
        <>
          <Input
            type="email"
            placeholder="Email Address"
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Password"
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
        </>
        
      )}
    </VStack>
  );
  return (
    <Container
      h={"100vh"} // Full viewport height for the outer container
      display="flex"
      alignItems="center" // Centering vertically
      justifyContent="center"
      maxW={"container.md"} // Centering horizontally
    >
      <Container maxW={"60%"} bg={bg} shadow="lg" rounded="3xl" p={6} h={isLoginScreen==='Log In'?'30%':"40%"}>
        <Box w={"100%"}>
          {signUp()}
          <HStack w={"full"} mt={10}>
            <Button
              colorScheme="teal"
              width="100%"
              // onClick={() => signUpHandler()}
              onClick={() =>{isLoginScreen==='Sign Up'?signUpHandler(): setIsLoginScreen("Sign Up")}}
              rounded={"3xl"}
              bgGradient={
                isLoginScreen === "Log In"
                  ? "linear(to-r,gray.400, gray.500)"
                  : "linear(to-r, cyan.400, blue.500)"
              }
            >
              Sign Up
            </Button>
            <Button
              colorScheme="teal"
              width="100%"
              onClick={() =>{isLoginScreen==='Log In'?loginHandler(): setIsLoginScreen("Log In")}}
              rounded={"3xl"}
              bgGradient={
                isLoginScreen === "Sign Up"
                  ? "linear(to-r,gray.400, gray.500)"
                  : "linear(to-r, cyan.400, blue.500)"
              }
            >
              Login
            </Button>
          </HStack>
        </Box>
      </Container>
    </Container>
  );
};

export default AuthPage;
