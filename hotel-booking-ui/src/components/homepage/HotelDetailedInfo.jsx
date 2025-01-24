import { Box, Typography } from "@mui/material";
import { useState } from "react";

import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PoolIcon from "@mui/icons-material/Pool";
import HotTubIcon from "@mui/icons-material/HotTub";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import WifiIcon from "@mui/icons-material/Wifi";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import DryCleaningOutlinedIcon from "@mui/icons-material/DryCleaningOutlined";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import PhonelinkRingOutlinedIcon from "@mui/icons-material/PhonelinkRingOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import KayakingOutlinedIcon from "@mui/icons-material/KayakingOutlined";
import GolfCourseOutlinedIcon from "@mui/icons-material/GolfCourseOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SmokeFreeOutlinedIcon from "@mui/icons-material/SmokeFreeOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";

const IconStyle = { color: "#1976d2", fontSize: "22px" };

const HotelDetailedInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: 7,
        pb: 7,
        width: "50%",
        m: "auto",
      }}
    >
      <FeatureAmenities />
      <HotelInformation />
    </Box>
  );
};

const FeatureAmenities = () => {
  const [seeMore, setSeeMore] = useState(false);

  const amenities = [
    [
      { text: "Sustainability", Icon: EnergySavingsLeafOutlinedIcon },
      { text: "Restaurant", Icon: RestaurantOutlinedIcon },
      { text: "Fitness Center", Icon: FitnessCenterIcon },
    ],
    [
      { text: "All Inclusive", Icon: AllInclusiveIcon },
      { text: "Outdoor Pool", Icon: PoolIcon },
      { text: "Hot Tub", Icon: HotTubIcon },
    ],
    [
      { text: "Free Wifi", Icon: WifiIcon },
      { text: "Game Room", Icon: SportsEsportsOutlinedIcon },
      { text: "Convenience Store", Icon: LocalGroceryStoreOutlinedIcon },
    ],
    [
      { text: "Dry Cleaning Service", Icon: DryCleaningOutlinedIcon },
      { text: "Room Service", Icon: RoomServiceOutlinedIcon },
      { text: "24 Hour Room Service", Icon: EventAvailableIcon },
    ],
    [
      { text: "Mobile Key", Icon: VpnKeyOutlinedIcon },
      { text: "Digital Check In", Icon: PhonelinkRingOutlinedIcon },
      { text: "Daily Housekeeping", Icon: CheckOutlinedIcon },
    ],
    [
      { text: "Kayaking", Icon: KayakingOutlinedIcon },
      { text: "Golf Course", Icon: GolfCourseOutlinedIcon },
    ],
  ];
  return (
    <Box sx={{ mb: 10 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" sx={{ fontSize: "18px", fontWeight: "bold" }}>
          FEATURED AMENITIES ON-SITE
        </Typography>
        {amenities.map((rowData, index) => (
          <>
            {(index < 3 || seeMore) && (
              <Box
                sx={{
                  display: "flex",
                }}
              >
                {rowData.map((item) => (
                  <IconWithText text={item.text}>
                    <item.Icon sx={IconStyle} />
                  </IconWithText>
                ))}
              </Box>
            )}
          </>
        ))}
      </Box>
      <Typography
        sx={{ textDecoration: "underline", mt: 3, cursor: "pointer" }}
        onClick={() => setSeeMore(!seeMore)}
      >
        {seeMore ? "See less" : "See more"}
      </Typography>
    </Box>
  );
};

const HotelInformation = () => {
  const textStyleObj = { ml: "30px", fontSize: "12px" };
  const hotelInfo = [
    { text: "Check-in: 3:00 PM", Icon: AccessTimeOutlinedIcon },
    { text: "Check-out: 12:00 PM", Icon: AccessTimeOutlinedIcon },
    { text: "Minimum age to check-in: 18", Icon: CheckOutlinedIcon },
    { text: "Smoke-free Policy", Icon: SmokeFreeOutlinedIcon },
  ];
  return (
    <Box>
      <Typography variant="h4" sx={{ fontSize: "18px", fontWeight: "bold" }}>
        HOTEL INFORMATION
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {hotelInfo.map((item) => (
            <IconWithText text={item.text}>
              <item.Icon sx={IconStyle} />
            </IconWithText>
          ))}
        </Box>
        <Box>
          <IconWithText text={"Pet Policy"}>
            <PetsOutlinedIcon sx={IconStyle} />
          </IconWithText>
          <Typography variant="body2" sx={textStyleObj} marginTop="5px">
            Pets not Allowed
          </Typography>
        </Box>
        <Box>
          <IconWithText text={"Parking"}>
            <LocalParkingOutlinedIcon sx={IconStyle} />
          </IconWithText>
          <Typography variant="body2" sx={textStyleObj}>
            Valet
          </Typography>
          <Typography variant="body2" sx={textStyleObj}>
            Daily: $20
          </Typography>
          <Typography variant="body2" marginTop="5px" sx={textStyleObj}>
            Airport shuttle
          </Typography>
          <Typography variant="body2" sx={textStyleObj}>
            Daily: $60
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const IconWithText = ({ children, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: 400,
        flexShrink: 0,
        mt: 2,
      }}
    >
      {children}
      <Typography sx={{ ml: 1, pt: 1, whiteSpace: "nowrap" }}>
        {text}
      </Typography>
    </Box>
  );
};

export default HotelDetailedInfo;
