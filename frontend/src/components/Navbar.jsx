import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{ base: "column", sm: "row" }}
      >
      
          <Text
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
            fontSize={{ base: "22", sm: "28" }}
            fontWeight="extrabold"
          >
           <Link to={"/"}>Product Store 🛒</Link>
          </Text>
     
        <HStack spacing={2} alignItems="center">
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus size={22} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
