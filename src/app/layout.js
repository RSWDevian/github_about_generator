"use client";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0, 173, 181)',         // teal blue
      contrastText: 'rgb(255, 255, 255)',
    },
    secondary: {
      main: 'rgb(248, 180, 0)',         // amber
      contrastText: 'rgb(0, 0, 0)',
    },
    background: {
      default: 'rgb(18, 18, 18)',       // dark background
      paper: 'rgb(30, 30, 30)',         // card background
    },
    text: {
      primary: 'rgb(224, 224, 224)',    // light gray
      secondary: 'rgb(176, 190, 197)',  // muted blue-gray
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: 'rgb(255, 255, 255)',
    },
    body1: {
      fontSize: '1rem',
      color: 'rgb(224, 224, 224)',
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}