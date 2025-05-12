//? Component to show the embedded systems tools and platforms section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* Embedded systems tools and platforms
const embeddedTools = [
  "C / C++ for microcontrollers",
  "Arduino",
  "STM32",
  "PlatformIO",
  "FreeRTOS",
  "Zephyr RTOS",
  "Embedded Linux",
];

function Embedded({ details, handleChange }) {
  //* storing the current embedded systems tools
  const currentEmbedded = details.skills?.embedded || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (tool) => {
    const updatedEmbedded = currentEmbedded.includes(tool)
      ? currentEmbedded.filter((s) => s !== tool)
      : [...currentEmbedded, tool];

    handleChange({
      ...details.skills,
      embedded: updatedEmbedded,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Embedded & Low-Level Development
      </Typography>
      <Grid container spacing={2}>
        {embeddedTools.map((tool) => (
          <Grid item xs={6} sm={4} md={3} key={tool}>
            <Button
              variant={
                currentEmbedded.includes(tool) ? "contained" : "outlined"
              }
              color={currentEmbedded.includes(tool) ? "primary" : "default"}
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

export default Embedded;
