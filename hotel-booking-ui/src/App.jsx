import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import { useEffect, useState } from "react";

function App() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 112) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <CssBaseline />
      <Navbar isFixed={isFixed} />
      <Box mt={isFixed ? "200px" : ""}>
        <Homepage />
      </Box>
    </Box>
  );
}

export default App;
