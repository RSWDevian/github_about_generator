//? Component to show the testing tools and frameworks section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* Testing tools and frameworks
const testingTools = [
  "Jest",
  "Cypress",
  "Playwright",
  "Selenium",
  "Mocha",
  "Postman",
  "Testing Library",
  "Detox",
  "K6",
];

function Testing({ details, handleChange }) {
  //* storing the current testing tools
  const currentTesting = details.skills?.testing || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (skill) => {
    const updatedTesting = currentTesting.includes(skill)
      ? currentTesting.filter((s) => s !== skill)
      : [...currentTesting, skill];

    handleChange({
      ...details.skills,
      testing: updatedTesting,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Testing Tools & QA
      </Typography>
      <Grid container spacing={2}>
        {testingTools.map((tool) => (
          <Grid item xs={6} sm={4} md={3} key={tool}>
            <Button
              variant={currentTesting.includes(tool) ? "contained" : "outlined"}
              color={currentTesting.includes(tool) ? "primary" : "default"}
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

export default Testing;
