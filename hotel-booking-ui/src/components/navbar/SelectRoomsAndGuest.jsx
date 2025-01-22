import { useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { InputWithPopUp } from "./InputWithPopUp";
import { Box, IconButton, Typography } from "@mui/material";

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
      minWidth={200}
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

export default SelectRoomsAndGuest;
