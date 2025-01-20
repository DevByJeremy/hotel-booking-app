import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import React, { useEffect, useState } from "react";

const Carousel = ({ src }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const selectedCircleIconStyle = {
    fontSize: "small",
    color: "#fff",
    ml: 1,
    mr: 1,
  };
  const unSelectedCircleIconStyle = {
    fontSize: "6px",
    ml: 1,
    mr: 1,
    color: "#999999",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSelect();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  const handlePreviousSelect = () => {
    if (currentImage === 0) {
      setCurrentImage(src.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleNextSelect = () => {
    if (currentImage === src.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <Box sx={{ position: "relative", width: 1, pt: "36.25%" }}>
      <img
        width="100%"
        height="100%"
        src={src[currentImage]}
        style={{ top: 0, left: 0, position: "absolute" }}
      />

      <Box
        sx={{
          position: "absolute",
          backgroundColor: "#000000a8",
          borderRadius: 20,
          left: "50%",
          bottom: 30,
          pl: "5px",
          display: "flex",
          alignItems: "center",
          pt: 1,
          pb: 1,
        }}
      >
        <IconButton
          sx={{
            color: "#fff",
          }}
          onClick={handlePreviousSelect}
        >
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>

        {[0, 1, 2].map((item) => (
          <CircleIcon
            sx={
              currentImage == item
                ? selectedCircleIconStyle
                : unSelectedCircleIconStyle
            }
          />
        ))}

        <IconButton
          sx={{
            color: "#fff",
          }}
          onClick={handleNextSelect}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Carousel;
