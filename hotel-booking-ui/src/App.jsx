import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Homepage />
    </Box>
  );
}

export default App;
