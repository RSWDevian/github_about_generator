//? Component to show the build tools section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* Build tools
const buildTools = [
  "Webpack",
  "Vite",
  "Rollup",
  "Parcel",
  "TurboRepo",
  "esbuild",
  "Snowpack",
];

function Build({ details, handleChange }) {
  //* storing the current build tools
  const currentBuildTools = details.skills?.build || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (tool) => {
    const updatedBuildTools = currentBuildTools.includes(tool)
      ? currentBuildTools.filter((s) => s !== tool)
      : [...currentBuildTools, tool];

    handleChange({
      ...details.skills,
      build: updatedBuildTools,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Build Tools/Bundlers
      </Typography>
      <Grid container spacing={2}>
        {buildTools.map((tool) => (
          <Grid item xs={6} sm={4} md={3} key={tool}>
            <Button
              variant={
                currentBuildTools.includes(tool) ? "contained" : "outlined"
              }
              color={currentBuildTools.includes(tool) ? "primary" : "default"}
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

export default Build;
