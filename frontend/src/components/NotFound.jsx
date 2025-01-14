import { Container, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <Container maxW={'container.lg'}>
      <VStack spacing={10}>
        <Flex alignItems={"center"} gap={5} justifyContent={"center"} >
          <Text
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
            fontSize={{ base: "20", sm: "24" }}
            fontWeight="bold"
          >
         Current Products 🚀
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={5} justifyContent={"center"}  flexDir={{base:'column', sm:'row'}} >
          <Text  color={"gray.500"} fontSize={{ base: "16", sm: "18" }} fontWeight={'semibold'} >
          No products found 😢{" "}
          </Text>
          <Link to={'/create'}>

          <Text
          as={'span'}
           color={'blue.400'}
            fontSize={{ base: "16", sm: "18" }}
            fontWeight="bold"
            _hover={{textDecoration:"underline"}}
          >
            Create a product
          </Text>
          </Link>
        </Flex>
      </VStack>
    </Container>
  );
};

export default NotFound;
