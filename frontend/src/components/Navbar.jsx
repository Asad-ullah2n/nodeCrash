import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CiLogout, CiSquarePlus } from "react-icons/ci";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useUserStore } from "../store/user";
import { PiLogDuotone } from "react-icons/pi";

const Navbar = () => {
  const { logoutUser } = useUserStore();
  // const users = useUserStore((state) => state.users);
  // console.log('users0', users);
  const handleLogout = () => {
    logoutUser();
  }
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
           <Link to={"/home"}>Asad Ullah PortFolio </Link>
           {/* <Link to={"/home"}>Asad Ullah PortFolio 🛒</Link> */}
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
          <Button size={22} onClick={handleLogout}>
<CiLogout fontWeight={'bold'} size={22}/>
      </Button> 
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
