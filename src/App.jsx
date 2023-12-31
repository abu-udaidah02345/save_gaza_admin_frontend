import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Home, Users, Content, Videos } from "./pages";
import Navbar from "./components/Common/Navbar";
import Sidebar from "./components/Common/Sidebar";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Box sx={{ ml: "180px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/content" element={<Content />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
