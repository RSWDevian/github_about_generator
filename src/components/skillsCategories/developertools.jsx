//? Component to show the developer tools section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* Developer tools
const developerTools = [
  "Visual Studio Code",
  "IntelliJ IDEA",
  "PyCharm",
  "Android Studio",
  "Xcode",
  "Qt Creator",
  "CLion",
  "Emacs",
  "Neovim",
  "GitKraken",
];

function DeveloperTools({ details, handleChange }) {
  //* storing the current developer tools
  const currentDeveloperTools = details.skills?.developertools || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (tool) => {
    const updatedDeveloperTools = currentDeveloperTools.includes(tool)
      ? currentDeveloperTools.filter((s) => s !== tool)
      : [...currentDeveloperTools, tool];

    handleChange({
      ...details.skills,
      developertools: updatedDeveloperTools,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Developer Tools & IDE
      </Typography>
      <Grid container spacing={2}>
        {developerTools.map((tool) => (
          <Grid item xs={6} sm={4} md={3} key={tool}>
            <Button
              variant={
                currentDeveloperTools.includes(tool) ? "contained" : "outlined"
              }
              color={
                currentDeveloperTools.includes(tool) ? "primary" : "default"
              }
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

export default DeveloperTools;
