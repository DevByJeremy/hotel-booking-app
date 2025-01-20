import React from "react";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import HeaderSection from "./HeaderSection";

const Navbar = () => {
  const navItems = ["Home", "Rooms", "Bookings", "About", "Contact"];

  return (
    <Box>
      <AppBar position="static" sx={{ boxShadow: 0 }}>
        <Toolbar sx={{ m: 3 }}>
          <IconButton
            color="inherit"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HOTEL
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((navItem) => (
              <Button key={navItem} color="#fff" sx={{ ml: 4 }}>
                {navItem}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <HeaderSection />
    </Box>
  );
};





export default Navbar;
