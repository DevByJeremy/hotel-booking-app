import { Box, Typography } from "@mui/material";
import { useState } from "react";

const HotelAreaInfo = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          pt: 10,
          m: 4,
          mt: 0,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#707070",
            mb: 1,
            textTransform: "uppercase",
          }}
        >
          Welcome to Plano Hotel at Legacy Town Center
        </Typography>
        <Highlight />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bolder",
            m: 4,
          }}
        >
          Explore the area from our hotel in Plano, Texas
        </Typography>
        <Typography width="50vw">
          Seamlessly blending style and substance, Dallas/Plano Marriott at
          Legacy Town Center is the ideal home base for your travels. Our hotel
          welcomes business and leisure travelers to Texas with a superb
          location,{" "}
          {seeMore ? (
            <>
              just a short walk from The Shops at Legacy, Toyota Stadium and
              Crayola Experience Plano. Corporate guests enjoy easy access to
              major Plano-area companies including Capital One, Toyota and
              JPMorgan Chase. Surround yourself with comfort in our modernized
              hotel rooms and suites, appointed with rainfall showers, premium
              bedding, high-speed Wi-Fi and 55-inch flat-screen TVs. Host an
              important meeting or joyful social occasion in 35,000 square feet
              of event space, enhanced by expert organizers and catering staff.
              Recharge in our outdoor pool or at our 24-hour fitness center.
              Savor delicious American fare at our hotel restaurant, Copper
              Creek, or grab a coffee at the full-service Starbucks®. Whatever
              your reason for joining us, our hotel in Plano, Texas is the smart
              way to travel.
              <Typography
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => setSeeMore(false)}
              >
                See Less
              </Typography>
            </>
          ) : (
            <>
              <Typography
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => setSeeMore(true)}
              >
                See More
              </Typography>
            </>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

const Highlight = () => {
  return (
    <Box
      sx={{
        borderTop: "4px solid #1976d2",
        width: "100px",
        m: 2,
      }}
    />
  );
};

export default HotelAreaInfo;
