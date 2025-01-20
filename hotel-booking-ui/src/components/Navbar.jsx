import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import CircleIcon from "@mui/icons-material/Circle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

import {
  Box,
  Button,
  IconButton,
  Link,
  Rating,
  Toolbar,
  Typography,
} from "@mui/material";
import DateRange from "./DateRange";
import { addDays, set } from "date-fns";
import { InputWithPopUp } from "./InputWithPopUp";

const Navbar = () => {
  const navItems = ["Home", "Rooms", "Bookings", "About", "Contact"];

  return (
    <Box>
      <AppBar position="static" sx={{ boxShadow: 0 }}>
        <Toolbar sx={{ m: 3 }}>
          <IconButton
            color="inherit"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HOTEL
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((navItem) => (
              <Button key={navItem} color="#fff" sx={{ ml: 4 }}>
                {navItem}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <FixedHeaderSection />
    </Box>
  );
};

const FixedHeaderSection = () => {
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
    specialRates: "Lowest Regular Rate",
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

const SelectRoomsAndGuest = ({ isOpen, setIsOpen }) => {
  const [input, setInput] = useState({
    rooms: 1,
    adults: 1,
    children: 0,
  });

  let displayValue = `${input.rooms} Room${input.rooms > 1 ? "s" : ""}, ${
    input.adults
  } Adult${input.adults > 1 ? "s" : ""}`;
  if (input.children)
    displayValue = displayValue.concat(
      `, ${input.children} ${input.children == 1 ? "Child" : "Children"} `
    );
  return (
    <InputWithPopUp
      title="ROOMS & GUEST"
      value={displayValue}
      minWidth={320}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isOpenKey="room"
    >
      <Box
        sx={{
          p: 4,
          pt: 1,
          display: "inline-block",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#707070",
            mb: 3,
            display: "inline-block",
          }}
          width={250}
        >
          MAXIMUM 8 GUESTS PER ROOM
        </Typography>
        <SelectRoomsAndGuestItem
          title="Rooms"
          subTitle="(Max: 3 Rooms/person)"
          count={input.rooms}
          minCount={1}
          maxCount={3}
          setInput={setInput}
          inputKey="rooms"
          input={input}
        />
        <SelectRoomsAndGuestItem
          title="Adults"
          subTitle="(Max: 8 total guests/room)"
          count={input.adults}
          minCount={1}
          setInput={setInput}
          inputKey="adults"
          input={input}
        />
        <SelectRoomsAndGuestItem
          title="Children"
          subTitle="(Max: 8 total guests/room)"
          count={input.children}
          setInput={setInput}
          inputKey="children"
          input={input}
        />
      </Box>
    </InputWithPopUp>
  );
};

const SelectRoomsAndGuestItem = ({
  title,
  subTitle,
  count,
  maxCount,
  minCount,
  setInput,
  input,
  inputKey,
}) => {
  const numOfGuest = input.children + input.adults;
  return (
    <Box
      sx={{
        borderBottom: "1px solid #eee",
        pb: 2,
        pt: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 400,
      }}
    >
      <Box>
        <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#707070", fontSize: "small" }}
        >
          {subTitle}
        </Typography>
      </Box>
      <Box
        width={100}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          disabled={count == minCount || count == 0}
          onClick={() =>
            setInput({
              ...input,
              [inputKey]: input[inputKey] - 1,
            })
          }
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
        {count}
        <IconButton
          disabled={
            count == maxCount || (numOfGuest == 8 && inputKey != "rooms")
          }
          onClick={() =>
            setInput({
              ...input,
              [inputKey]: input[inputKey] + 1,
            })
          }
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

const SpecialRatesSection = ({ input, setInput, isOpen, setIsOpen }) => {
  return (
    <InputWithPopUp
      title="ROOMS & GUEST"
      value={input.specialRates}
      minWidth={320}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isOpenKey="specialRate"
    >
      <Box
        sx={{
          p: 4,
          pt: 1,
          display: "inline-block",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#707070",
            mb: 3,
            display: "inline-block",
          }}
          width={250}
        >
          SPECIAL RATES/POINTS
        </Typography>
        <SpecialRatesItem
          title="Lowest Regular Rate"
          input={input}
          setInput={setInput}
        />
        <SpecialRatesItem
          title="Member Rate"
          input={input}
          setInput={setInput}
        />
      </Box>
    </InputWithPopUp>
  );
};

const SpecialRatesItem = ({ title, setInput, input }) => {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #eee",
        pb: 2,
        pt: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 400,
      }}
      onClick={() => setInput({ ...input, specialRate: title })}
    >
      <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
        {title}
      </Typography>

      <IconButton>
        {input.specialRate === title ? (
          <RadioButtonCheckedIcon sx={{ fill: "#000000" }} />
        ) : (
          <CircleOutlinedIcon sx={{ fill: "#0000009c" }} />
        )}
      </IconButton>
    </Box>
  );
};

export default Navbar;
