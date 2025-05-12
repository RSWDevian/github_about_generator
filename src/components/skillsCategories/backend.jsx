//? Component to show the backend skills section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* backend technologies
const backendTechnologies = [
  "Node.js",
  "Django",
  "Flask",
  "Spring Boot",
  "ASP.NET Core",
  "NestJS",
  "FastAPI",
  "Laravel",
  "Ruby on Rails",
  "Phoenix (Elixir)",
  "Ktor (Kotlin)",
];

function Backend({ details, handleChange }) {
  //* storing the current backend technologies
  const currentBackend = details.skills?.backend || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (skill) => {
    const updatedBackend = currentBackend.includes(skill)
      ? currentBackend.filter((s) => s !== skill)
      : [...currentBackend, skill];

    handleChange({
      ...details.skills,
      backend: updatedBackend,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Backend Technologies
      </Typography>
      <Grid container spacing={2}>
        {backendTechnologies.map((technology) => (
          <Grid item xs={6} sm={4} md={3} key={technology}>
            <Button
              variant={
                currentBackend.includes(technology) ? "contained" : "outlined"
              }
              color={
                currentBackend.includes(technology) ? "primary" : "default"
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

export default Backend;
