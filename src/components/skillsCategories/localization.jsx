//? Component to show the localization tools section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* Localization tools
const localizationTools = [
  "i18next",
  "react-intl",
  "LinguiJS",
  "FormatJS",
  "Lokalise",
  "Phrase",
];

function Localization({ details, handleChange }) {
  //* storing the current localization tools
  const currentLocalization = details.skills?.localization || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (tool) => {
    const updatedLocalization = currentLocalization.includes(tool)
      ? currentLocalization.filter((s) => s !== tool)
      : [...currentLocalization, tool];

    handleChange({
      ...details.skills,
      localization: updatedLocalization,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Internationalization / Localization
      </Typography>
      <Grid container spacing={2}>
        {localizationTools.map((tool) => (
          <Grid item xs={6} sm={4} md={3} key={tool}>
            <Button
              variant={
                currentLocalization.includes(tool) ? "contained" : "outlined"
              }
              color={currentLocalization.includes(tool) ? "primary" : "default"}
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

export default Localization;
