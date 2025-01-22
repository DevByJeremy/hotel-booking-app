import { Box, Button, List, ListItem, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const RoomNavigation = ({ rooms, setRooms, currentRoom, setCurrentRoom }) => {
  const nextRoom = () => {
    const roomsShiftedRight = [...rooms];
    const firstRoomElement = roomsShiftedRight.shift();
    roomsShiftedRight.push(firstRoomElement);
    setRooms(roomsShiftedRight);
    setCurrentRoom((currentRoom + 1) % rooms.length);
  };

  const prevRoom = () => {
    const roomsShiftedLeft = [...rooms];
    const lastRoomElement = roomsShiftedLeft.pop();
    roomsShiftedLeft.unshift(lastRoomElement);
    setRooms(roomsShiftedLeft);
    setCurrentRoom((currentRoom - 1 + rooms.length) % rooms.length);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
        <Typography>{`0${currentRoom + 1}`}</Typography>
        <RoomSelectionIndicator rooms={rooms} currentRoom={currentRoom} />
        <Typography sx={{ ml: 1 }}>{`0${rooms.length}`}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
        <Button
          variant=""
          sx={{
            display: "flex",
            alignItems: "center",
            mr: 10,
            ":hover svg": {
              opacity: 1,
            },
          }}
          onClick={prevRoom}
        >
          <Typography>Prev</Typography>
          <Box
            sx={{
              borderTop: "1px solid #1976d2",
              borderBottom: "1px solid #1976d2",
              width: "50px",
              ml: 1,
              position: "relative",
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{
                color: "#1976d2",
                position: "absolute",
                left: -11,
                top: -12,
                opacity: 0,
              }}
            />
          </Box>
        </Button>
        <Button
          variant=""
          sx={{
            display: "flex",
            alignItems: "center",
            ":hover svg": {
              opacity: 1,
            },
          }}
          onClick={nextRoom}
        >
          <Box
            sx={{
              borderTop: "1px solid #1976d2",
              borderBottom: "1px solid #1976d2",
              width: "50px",
              ml: 1,
              mr: 1,
              position: "relative",
            }}
          >
            <KeyboardArrowRightIcon
              sx={{
                color: "#1976d2",
                position: "absolute",
                right: -11,
                top: -12,
                opacity: 0,
              }}
            />
          </Box>
          <Typography>Next</Typography>
        </Button>
      </Box>
    </Box>
  );
};

const RoomSelectionIndicator = ({ rooms, currentRoom }) => {
  return (
    <List sx={{ display: "flex", alignItems: "center", ml: 1 }}>
      {rooms.map((item, index) => (
        <ListItem
          key={index}
          sx={{
            width: "40px",
            height: "1px",
            p: 0,
            borderTop:
              index === currentRoom ? "2px solid #1976d2" : "1px solid #000000",
            borderBottom: index === currentRoom ? "1px solid #1976d2" : "",
          }}
        />
      ))}
    </List>
  );
};

export default RoomNavigation;
