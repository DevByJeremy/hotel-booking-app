import { Box } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";

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
      {/* <img width="100%" src="https://i.imgur.com/ZWfifcY.jpeg" /> */}
    </Box>
  );
};

export default Homepage;
