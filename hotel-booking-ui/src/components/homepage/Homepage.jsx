import { Box } from "@mui/material";
import Carousel from "./Carousel";
import HotelAreaInfo from "./HotelAreaInfo";
import Rooms from "./rooms/Rooms";
import HotelDetailedInfo from "./HotelDetailedInfo";

const Homepage = () => {
  return (
    <Box
      sx={{
        width: 1,
      }}
    >
      <Carousel
        src={[
          "https://i.imgur.com/ZWfifcY.jpeg",
          "https://imgur.com/W6Drxf3.jpeg",
          "https://imgur.com/3qmgMFy.jpeg",
        ]}
      />
      <HotelAreaInfo />
      <Rooms />
      <HotelDetailedInfo />
    </Box>
  );
};

export default Homepage;
