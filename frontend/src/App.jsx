import { Box, useColorModeValue } from "@chakra-ui/react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";
import { useUserStore } from "./store/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";
  const { isAuthenticated } = useUserStore();
  
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      {showNavbar && isAuthenticated && <Navbar />}
      <Routes>
        {isAuthenticated ? (
          <>
            {/* Protected Routes */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            {/* Auth Routes */}
            <Route path="/" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Box>
  );
}

export default App;
