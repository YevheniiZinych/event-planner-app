import styled from "@emotion/styled";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";

export const Calendar = styled(DatePicker)(({ theme }) => ({
  "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline ":
    {
      borderColor: "#ACA7C3",
    },

  "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
    width: 240,
    borderRadius: 8,
    marginTop: 5,

    [theme.breakpoints.between("tablet", "tabMax")]: {
      width: 308,
      marginTop: 0,
    },

    [theme.breakpoints.up("desktop")]: {
      width: 372,
      marginTop: 0,
    },
  },
}));

export const Time = styled(DesktopTimePicker)(({ theme }) => ({
  "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline ":
    {
      borderColor: "#ACA7C3",
    },

  "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
    width: 240,
    borderRadius: 8,

    [theme.breakpoints.between("tablet", "tabMax")]: {
      width: 308,
      marginTop: 0,
    },

    [theme.breakpoints.up("desktop")]: {
      width: 372,
      marginTop: 0,
    },
  },
}));
