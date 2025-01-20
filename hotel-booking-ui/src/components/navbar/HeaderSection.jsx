import React, { useEffect, useState } from "react";
import SelectRoomsAndGuest from "./SelectRoomsAndGuest";
import DateRange from "./DateRange";
import SpecialRatesSection from "./SpecialRatesSection";
import { Box, Button, Link, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import CircleIcon from "@mui/icons-material/Circle";
import { addDays } from "date-fns";

const HeaderSection = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ position: isFixed ? "fixed" : "static", width: 1, top: 0 }}>
      <HotelInfo />
      <SearchContent />
    </Box>
  );
};

const HotelInfo = () => {
  const reviewRating = 4.4;
  return (
    <Box
      sx={{
        display: "flex",
        p: 3,
        alignItems: "center",
        backgroundColor: "white",
        height: 80,
        flexGrow: 1,
      }}
    >
      <Typography variant="h6" pr={2} fontWeight="bolder">
        Plano Hotel at Legacy Town Center
      </Typography>
      <Rating
        name="size-small"
        defaultValue={reviewRating}
        size="small"
        readOnly
        icon={<StarIcon />}
        emptyIcon={<StarHalfIcon sx={{ color: "#faaf00" }} />}
      />
      <Typography pl={1}>{reviewRating}</Typography>
      <CircleIcon sx={{ fontSize: "6px", ml: 1, mr: 1 }} />
      <Link href="#">1320 Reviews</Link>
    </Box>
  );
};

const SearchContent = () => {
  const [input, setInput] = useState({
    rooms: 1,
    adults: 1,
    children: 0,
    specialRate: "Lowest Regular Rate",
    promoCode: "",
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
  });
  const [isOpen, setIsOpen] = useState({
    date: false,
    room: false,
    specialRate: false,
  });

  return (
    <Box
      sx={{
        height: 120,
        width: "100%",
        flexGrow: 1,
        boxShadow: 2,
        display: "flex",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <Box sx={{ pl: 4 }}>
          <DateRange
            date={input}
            setDate={setInput}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </Box>
        <SeperatorLine />
        <SelectRoomsAndGuest
          input={input}
          setInput={setInput}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <SeperatorLine />
        <SpecialRatesSection
          input={input}
          setInput={setInput}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        <Button variant="contained" sx={{ mr: 4 }}>
          View Rates
        </Button>
      </Box>
    </Box>
  );
};

const SeperatorLine = () => {
  return (
    <Box
      sx={{
        borderLeft: "1px dashed black",
        width: "1px",
        height: 80,
      }}
    />
  );
};

export default HeaderSection;
