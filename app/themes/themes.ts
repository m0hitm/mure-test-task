"use client";
import { createTheme } from "@mui/material";
import { Roboto } from "next/font/google";
import { pxToRem, responsiveFontSizes } from "./utils";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

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
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: pxToRem(40),
      fontWeight: 700,
      lineHeight: 80 / 64,
      letterSpacing: 2,
      ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
    },
    h2: {
      fontSize: pxToRem(32),
      fontWeight: 700,
      lineHeight: 64 / 48,
      ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
    },
    h3: {
      fontSize: pxToRem(24),
      fontWeight: 700,
      lineHeight: 1.5,
      ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
    },
    h4: {
      fontSize: pxToRem(20),
      fontWeight: 600,
      lineHeight: 1.5,
      ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
    },
    h5: {
      fontSize: 30,
      fontWeight: 700,
      lineHeight: 1.5,
      ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
    },
    h6: {
      fontSize: pxToRem(17),
      fontWeight: 700,
      lineHeight: 28 / 18,
      ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(16),
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
    },
    body1: {
      lineHeight: 1.5,
      fontSize: pxToRem(16),
    },
    body2: {
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
    },
    caption: {
      lineHeight: 1.5,
      fontSize: pxToRem(12),
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(12),
      textTransform: "uppercase",
    },
    button: {
      fontWeight: 400,
      lineHeight: 2,
      fontSize: pxToRem(16),
      textTransform: "capitalize",
    },
  },
});
