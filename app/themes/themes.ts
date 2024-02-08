"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#508AF5",
    },
    secondary: {
      main: "#fb6149",
    },
    text: {
      primary: "#fff",
      secondary: "#dfddde",
      disabled: "#ccc",
    },
    background: {
      default: "#19171E",
      paper: "#242429",
    },
    action: {
      disabledBackground: "#19171E",
      disabled: "grey",
    },
    error: {
      main: "#fb6149",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});
