import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import RoomNavigation from "./RoomNavigation";
import RoomCardList from "./RoomCardList";

const Rooms = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", pt: 7, pb: 7 }}>
      <Box sx={{ width: "60%", m: "auto" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bolder",
            fontSize: 30,
          }}
        >
          Rooms & Suites
        </Typography>
        <RoomsCatalog />
      </Box>
    </Box>
  );
};

const RoomsCatalog = () => {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [rooms, setRooms] = useState([
    {
      name: "Guest Room",
      cover:
        "https://cache.marriott.com/content/dam/marriott-renditions/DALPT/dalpt-guestroom-3613-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1140px:*",
    },
    {
      name: "Deluxe Guest Room",
      cover:
        "https://cache.marriott.com/is/image/marriotts7prod/dalpt-guestroom-3612:Classic-Hor?wid=1140&fit=constrain",
    },
    {
      name: "Studio Suite",
      cover:
        "https://cache.marriott.com/content/dam/marriott-renditions/DALPT/dalpt-studio-0061-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1140px:*",
    },
    {
      name: "Juliet Balcony",
      cover:
        "https://cache.marriott.com/content/dam/marriott-renditions/DALPT/dalpt-suite-0063-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1140px:*",
    },
  ]);

  return (
    <Box>
      <RoomNavigation
        rooms={rooms}
        setRooms={setRooms}
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom}
      />
      <RoomCardList rooms={rooms} />
    </Box>
  );
};

export default Rooms;
