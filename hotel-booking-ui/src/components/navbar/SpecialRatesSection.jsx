import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { InputWithPopUp } from "./InputWithPopUp";

const SpecialRatesSection = ({ input, setInput, isOpen, setIsOpen }) => {
  return (
    <InputWithPopUp
      title="SPECIAL RATES"
      //   value={input.specialRate}
      value={
        input.specialRate === "Promo Code" && input.promoCode
          ? `Promo Code: ${input.promoCode}`
          : input.specialRate
      }
      minWidth={200}
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
          title={"Promo Code"}
          input={input}
          setInput={setInput}
        />
      </Box>
    </InputWithPopUp>
  );
};

const SpecialRatesItem = ({ title, setInput, input }) => {
  const handlePromoCode = (event) => {
    setInput({ ...input, promoCode: event.target.value });
  };
  return (
    <Box
      sx={{
        borderBottom: "1px solid #eee",
        pb: 2,
        pt: 2,
      }}
      onClick={() => setInput({ ...input, specialRate: title })}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 400,
        }}
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
      {input.specialRate === "Promo Code" && input.specialRate === title && (
        <TextField
          variant="standard"
          sx={{ width: 1 }}
          onChange={handlePromoCode}
          label="Enter Code"
          value={input.promoCode}
        />
      )}
    </Box>
  );
};

export default SpecialRatesSection;
