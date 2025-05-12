//? Component to show the UI/UX tools section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* UI/UX tools
const uiuxTools = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "InVision",
  "Balsamiq",
  "Zeplin",
  "Lottie",
];

function UIUX({ details, handleChange }) {
  //* storing the current UI/UX tools
  const currentUIUX = details.skills?.uiux || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (tool) => {
    const updatedUIUX = currentUIUX.includes(tool)
      ? currentUIUX.filter((s) => s !== tool)
      : [...currentUIUX, tool];

    handleChange({
      ...details.skills,
      uiux: updatedUIUX,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        UI/UX & Design Tools
      </Typography>
      <Grid container spacing={2}>
        {uiuxTools.map((tool) => (
          <Grid item xs={6} sm={4} md={3} key={tool}>
            <Button
              variant={currentUIUX.includes(tool) ? "contained" : "outlined"}
              color={currentUIUX.includes(tool) ? "primary" : "default"}
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

export default UIUX;
