//? Component to show the Qt tools and frameworks section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* Qt tools and frameworks
const qtTools = [
  "Qt Widgets – classic desktop UI framework",
  "Qt Quick / QML – modern declarative UI framework",
  "Qt Designer – WYSIWYG UI design tool",
  "Qt Multimedia – audio/video APIs",
  "Qt Network – TCP/UDP, HTTP clients",
  "Qt Charts – 2D charts and graphs",
  "Qt Test – C++ unit testing",
  "Qt for Python (PySide6) – Python bindings",
  "QMake – Qt build system",
  "CMake (with Qt support) – Modern C++ build tool",
];

function QT({ details, handleChange }) {
  //* storing the current Qt tools
  const currentQT = details.skills?.qt || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (tool) => {
    const updatedQT = currentQT.includes(tool)
      ? currentQT.filter((s) => s !== tool)
      : [...currentQT, tool];

    handleChange({
      ...details.skills,
      qt: updatedQT,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        C++ & Qt Ecosystem
      </Typography>
      <Grid container spacing={2}>
        {qtTools.map((tool) => (
          <Grid item xs={6} sm={4} md={3} key={tool}>
            <Button
              variant={currentQT.includes(tool) ? "contained" : "outlined"}
              color={currentQT.includes(tool) ? "primary" : "default"}
              onClick={() => toggleSkill(tool)}
              fullWidth
            >
              {tool}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default QT;
