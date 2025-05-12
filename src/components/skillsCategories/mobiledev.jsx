//? Component to show the mobile development frameworks and tools section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* Mobile development frameworks and tools
const mobileDevTools = [
  "React Native",
  "Flutter",
  "SwiftUI",
  "Kotlin Multiplatform",
  "Jetpack Compose",
  "Xamarin",
  "Ionic",
  "NativeScript",
];

function MobileDev({ details, handleChange }) {
  //* storing the current mobile development tools
  const currentMobileDev = details.skills?.mobiledev || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (skill) => {
    const updatedMobileDev = currentMobileDev.includes(skill)
      ? currentMobileDev.filter((s) => s !== skill)
      : [...currentMobileDev, skill];

    handleChange({
      ...details.skills,
      mobiledev: updatedMobileDev,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Mobile Development
      </Typography>
      <Grid container spacing={2}>
        {mobileDevTools.map((tool) => (
          <Grid item xs={6} sm={4} md={3} key={tool}>
            <Button
              variant={
                currentMobileDev.includes(tool) ? "contained" : "outlined"
              }
              color={currentMobileDev.includes(tool) ? "primary" : "default"}
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

export default MobileDev;
