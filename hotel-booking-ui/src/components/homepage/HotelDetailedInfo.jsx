import { Box, Typography } from "@mui/material";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import React from "react";

const HotelDetailedInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: 7,
        pb: 7,
        width: "60%",
        m: "auto",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" sx={{ fontSize: "18px", fontWeight: "bold" }}>
          FEATURED AMENITIES ON-SITE
        </Typography>
        <Box sx={{ display: "flex", mt: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EnergySavingsLeafIcon fontSize="10px" sx={{ color: "#1976d2" }} />
            <Typography sx={{ ml: 1 }}>Sustainability</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HotelDetailedInfo;
