import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    // <div>hello</div>
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/create" element={<Create />} />
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </Box>
  );
}

export default App;
