import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import {
  format,
  addDays,
  addMonths,
  differenceInDays,
  isBefore,
  isSameDay,
  isAfter,
  isPast,
} from "date-fns";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { PopUp } from "./InputWithPopUp";

const DateRange = ({ date, setDate, isOpen, setIsOpen }) => {
  if (!date) return null;

  const getNights = () => {
    if (!date.endDate) {
      return 1;
    }
    return differenceInDays(date.endDate, date.startDate);
  };

  return (
    <Box position="relative">
      <Box
        sx={{
          display: "flex",
          alignItems: "bottom",
          m: 1,
        }}
        onClick={() => setIsOpen({ date: true })}
      >
        <CalendarTodayIcon fontSize="small" />
        <Typography
          variant="body2"
          sx={{
            color: "#707070",
            ml: 0.5,
          }}
        >
          DATES ({getNights()} NIGHTS)
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#000000",
          cursor: "pointer",
          width: 270,
        }}
        onClick={() => setIsOpen({ date: true })}
      >
        <DateButton date={date.startDate} />
        <ArrowRightAltIcon sx={{ mr: 2, ml: 2 }} />
        <DateButton date={date.endDate} />
      </Box>
      {isOpen["date"] && (
        <DateRangePicker date={date} setDate={setDate} setIsOpen={setIsOpen} />
      )}
    </Box>
  );
};

const DateButton = React.memo(({ date }) => {
  if (!date) return null;

  const convertDateIntoString = () => {
    return format(date, "eee, MMM dd");
  };

  return (
    <Button sx={{ pointerEvents: "none" }} color="inherit">
      {convertDateIntoString(date)}
    </Button>
  );
});

const MonthPicker = ({
  date,
  setDate,
  month,
  monthPosition,
  setCurrentMonth,
}) => {
  const today = month;
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const firstDay = new Date(currentYear, currentMonth, 1);
  const firstDayOfWeek = firstDay.getDay();
  const nextMonth = addMonths(firstDay, 1);
  const daysInMonth = differenceInDays(nextMonth, firstDay);
  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const mapDaysInMonth = useMemo(() => {
    let firstDayFound = false;
    let currentDay = 0;
    const finalArray = [];
    for (let week = 1; week <= 5; week++) {
      const weekArray = [];
      for (let day = 0; day < daysInWeek.length; day++) {
        const dateObject = addDays(firstDay, currentDay);
        if (week == 1 && firstDayOfWeek == day) {
          firstDayFound = true;
          currentDay++;
          weekArray.push({
            week: week,
            day: day,
            currentDay: currentDay,
            dateObject: dateObject,
          });
          continue;
        }

        if (!firstDayFound) {
          weekArray.push(null);
        } else if (currentDay < daysInMonth) {
          currentDay++;
          weekArray.push({
            week: week,
            day: day,
            currentDay: currentDay,
            dateObject: dateObject,
          });
        }
      }
      finalArray.push(weekArray);
    }
    return finalArray;
  }, [today]);

  const length = 5;

  const handleDateSelect = (day) => {
    if (date.startDate && date.endDate) {
      updateDate(day, null);
      return;
    }

    if (date.startDate && !date.endDate) {
      if (isSameDay(date.startDate, day)) {
        updateDate(date.startDate, addDays(day, 1));
      } else if (isBefore(day, date.startDate)) {
        updateDate(day, null);
      } else {
        updateDate(date.startDate, day);
      }
    }
  };

  const updateDate = (startDate, endDate) => {
    setDate({
      ...date,
      startDate: startDate,
      endDate: endDate,
    });
  };

  return (
    <Box
      sx={{
        borderRadius: 1,
        m: 1,
        p: 1,
        mt: 0,
        pt: 0,
        display: "inline-block",
      }}
    >
      <MonthNavigation
        firstDay={firstDay}
        month={month}
        monthPosition={monthPosition}
        setCurrentMonth={setCurrentMonth}
      />
      <Box>
        {daysInWeek.map((day) => (
          <Button variant="">{day}</Button>
        ))}
        {Array.from({ length }, (_, i) => i).map((week) => (
          <Box key={week}>
            {mapDaysInMonth[week].map((day) => (
              <DayButton
                key={day?.dateObject}
                day={day}
                date={date}
                handleDateSelect={handleDateSelect}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const DayButton = ({ day, handleDateSelect, date }) => {
  const dateObject = day?.dateObject;
  const isStartDate = isSameDay(dateObject, date.startDate);
  const isEndDate = isSameDay(dateObject, date.endDate);
  const buttonStyles = {
    borderTopLeftRadius: isStartDate ? 20 : 0,
    borderBottomLeftRadius: isStartDate ? 20 : 0,
    borderTopRightRadius: isEndDate ? 20 : 0,
    borderBottomRightRadius: isEndDate ? 20 : 0,
  };

  const isDateInPastOrToday = (date) => {
    return isPast(date) && !isSameDay(date, new Date());
  };

  const isDateSelected = (day) => {
    if (isSameDay(day, date.startDate) || isSameDay(day, date.endDate)) {
      return "contained";
    }

    if (isBefore(day, date.endDate) && isAfter(day, date.startDate)) {
      return "contained";
    }

    return "";
  };

  return (
    <Button
      variant={isDateSelected(dateObject)}
      disableElevation
      sx={buttonStyles}
      onClick={() => handleDateSelect(dateObject)}
      disabled={isDateInPastOrToday(dateObject)}
    >
      {day?.currentDay}
    </Button>
  );
};

const MonthNavigation = ({
  setCurrentMonth,
  firstDay,
  month,
  monthPosition,
}) => {
  const isTodayMonth = firstDay.getMonth() != new Date().getMonth();
  return (
    <Box sx={{ display: "flex" }}>
      {monthPosition === "left" && isTodayMonth && (
        <IconButton onClick={() => setCurrentMonth(addMonths(month, -1))}>
          <ArrowBackIcon />
        </IconButton>
      )}
      <Typography
        variant="body1"
        sx={{
          color: "#707070",
          p: 2,
          textAlign: "center",
          flexGrow: 1,
        }}
      >
        {format(firstDay, "MMMM yyyy").toUpperCase()}
      </Typography>
      {monthPosition === "right" && (
        <IconButton onClick={() => setCurrentMonth(month)}>
          <ArrowForwardIcon />
        </IconButton>
      )}
    </Box>
  );
};

const DateRangePicker = ({ date, setDate, setIsOpen }) => {
  const [currentMonth, setCurrentMonth] = useState(date.startDate);

  const handleDoneClick = () => {
    if (date.startDate && date.endDate) {
      setIsOpen({ date: false });
    }
  };

  const handleCloseClick = () => {
    if (!date.endDate) {
      setDate({ ...date, endDate: addDays(date.startDate, 1) });
    }

    setIsOpen({ date: false });
  };
  return (
    <PopUp
      handleCloseClick={handleCloseClick}
      handleDoneClick={handleDoneClick}
    >
      <Box
        sx={{
          p: 4,
          display: "flex",
          width: 1050,
        }}
      >
        <MonthPicker
          date={date}
          setDate={setDate}
          month={currentMonth}
          monthPosition="left"
          setCurrentMonth={setCurrentMonth}
        />
        <MonthPicker
          date={date}
          setDate={setDate}
          month={addMonths(currentMonth, 1)}
          monthPosition="right"
          setCurrentMonth={setCurrentMonth}
        />
      </Box>
    </PopUp>
  );
};

export default DateRange;
