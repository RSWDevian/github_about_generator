//? Component to show the frontend skills section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* frontend technologies
const frontendTechnologies = [
  "React.js",
  "Angular",
  "Vue.js",
  "Svelte",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Chakra UI",
  "Emotion",
  "SCSS/SASS",
  "Web Components",
];

function Frontend({ details, handleChange }) {
  //* storing the current frontend technologies
  const currentFrontend = details.skills?.frontend || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (skill) => {
    const updatedFrontend = currentFrontend.includes(skill)
      ? currentFrontend.filter((s) => s !== skill)
      : [...currentFrontend, skill];

    handleChange({
      ...details.skills,
      frontend: updatedFrontend,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Frontend Technologies
      </Typography>
      <Grid container spacing={2}>
        {frontendTechnologies.map((technology) => (
          <Grid item xs={6} sm={4} md={3} key={technology}>
            <Button
              variant={
                currentFrontend.includes(technology) ? "contained" : "outlined"
              }
              color={
                currentFrontend.includes(technology) ? "primary" : "default"
              }
              onClick={() => toggleSkill(technology)}
              fullWidth
            >
              {technology}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Frontend;
