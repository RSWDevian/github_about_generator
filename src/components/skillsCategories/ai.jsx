//? Component to show the AI/ML tools and libraries section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* AI/ML tools and libraries
const aiTools = [
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "NumPy",
  "Pandas",
  "Keras",
  "XGBoost",
  "OpenCV",
  "Dask",
  "Hugging Face",
];

function AI({ details, handleChange }) {
  //* storing the current AI/ML tools
  const currentAI = details.skills?.ai || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (skill) => {
    const updatedAI = currentAI.includes(skill)
      ? currentAI.filter((s) => s !== skill)
      : [...currentAI, skill];

    handleChange({
      ...details.skills,
      ai: updatedAI,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        AI/ML/Data Science
      </Typography>
      <Grid container spacing={2}>
        {aiTools.map((tool) => (
          <Grid item xs={6} sm={4} md={3} key={tool}>
            <Button
              variant={currentAI.includes(tool) ? "contained" : "outlined"}
              color={currentAI.includes(tool) ? "primary" : "default"}
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

export default AI;
