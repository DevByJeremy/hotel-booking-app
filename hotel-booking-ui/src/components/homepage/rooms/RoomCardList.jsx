import { CardActionArea, List, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const RoomCard = ({ room }) => {
  return (
    <Card sx={{ maxWidth: 450, minWidth: 400, mr: 4 }}>
      <CardActionArea>
        <CardMedia component="img" image={room.cover} />
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            ":hover": {
              color: "#1976d2",
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bolder",
            }}
          >
            {room.name}
          </Typography>
          <KeyboardArrowRightIcon
            sx={{
              ml: 1,
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const RoomCardList = ({ rooms }) => {
  return (
    <List sx={{ display: "flex", overflow: "hidden" }}>
      {rooms.map((room) => (
        <RoomCard room={room} key={room.name} />
      ))}
    </List>
  );
};

export default RoomCardList;
