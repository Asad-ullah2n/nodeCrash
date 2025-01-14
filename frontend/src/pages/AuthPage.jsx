import {
    Box,
    Button,
    Container,
    Heading,
    Input,
    Text,
    useColorModeValue,
    useToast,
    VStack,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
import { useUserStore } from "../store/user";
  
  const AuthPage = () => {
    const toast = useToast();
    const [value, setValue] =  useState({name:'', email:'', password:''})
    const bg = useColorModeValue("white", "gray.700");
    const {createUser} = useUserStore()
    
    const signUpHandler = async ()=>{
        const { success, message } = await createUser(value);
        
      
            if (success) {
                toast({
                  title: message,
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                  position:'top'
                });
              } else {
                toast({
                  title: message,
                  status: "error",
                  duration: 3000,
                  isClosable: true,
                     position:'top'
                });
              }
        
    }
  
    return (
      <Container
        h="100vh" // Full viewport height for the outer container
        display="flex"
        alignItems="center" // Centering vertically
        justifyContent="center"
        maxW={'container.md'} // Centering horizontally
      >
        <Container
          maxW={"container"}
          bg={bg}
          shadow="lg"
          rounded="lg"
          p={6}
        >
          <Box w={"100%"}>
            <VStack spacing={4}>
              <Heading as={"h3"} textAlign="center">
                <Text fontSize={{ base: 18, sm: 22 }}>Sign Up</Text>
              </Heading>
              <Input placeholder="Username" value={value.name} onChange={(e)=>setValue({...value, name:e.target.value})} />
              <Input type="email" placeholder="Email Address" value={value.email} onChange={(e) =>
                setValue({ ...value, email: e.target.value })
              }/>
              <Input type="password" placeholder="Password"  value={value.password} onChange={(e)=>setValue({...value, password:e.target.value})}/>
              <Button colorScheme="teal" width="100%" onClick={()=>signUpHandler()}>
                Sign Up
              </Button>
            </VStack>
          </Box>
        </Container>
      </Container>
    );
  };
  
  export default AuthPage;
  