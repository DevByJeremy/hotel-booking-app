import { Box, Button, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useState } from "react";

export const InputWithPopUp = ({
  children,
  title,
  value,
  minWidth,
  isOpen,
  isOpenKey,
  setIsOpen,
}) => {
  const handleOpen = () => {
    if (setIsOpen) setIsOpen({ [isOpenKey]: true });
  };

  const handleCloseClick = () => {
    if (setIsOpen) setIsOpen({ [isOpenKey]: false });
  };

  const open = isOpen ? isOpen[isOpenKey] : false;

  return (
    <Box position="relative" minWidth={minWidth}>
      <Typography
        variant="body2"
        sx={{
          color: "#707070",
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex" }} onClick={() => handleOpen(true)}>
        <Typography mr={10}>{value}</Typography>
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Box>
      {open && (
        <PopUp
          handleCloseClick={handleCloseClick}
          handleDoneClick={handleCloseClick}
          children={children}
        />
      )}
    </Box>
  );
};

export const PopUp = ({ handleCloseClick, handleDoneClick, children }) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        boxShadow: 2,
        flexDirection: "column",
        alignItems: "end",
        p: 1,
        borderRadius: 3,
        zIndex: 1,
        top: 70,
        position: "absolute",
        backgroundColor: "white",
      }}
    >
      <IconButton onClick={handleCloseClick}>
        <ClearIcon fontSize="small" />
      </IconButton>
      {children}
      <Button
        variant="outlined"
        sx={{ alignSelf: "center", mb: 5, borderRadius: 20 }}
        onClick={handleDoneClick}
      >
        Done
      </Button>
    </Box>
  );
};
