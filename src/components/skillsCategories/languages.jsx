//? Component to show the programming language skills section
"use client"
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* programming languages
const programmingLanguages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "Go",
  "Rust",
  "Swift",
  "Kotlin",
  "Dart",
  "Ruby",
  "Haskell",
  "Elixir",
];

function Languages({ details, handleChange }) {
  //* storing the current languages
  const currentLanguages = details.skills?.languages || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (skill) => {
    const updatedLanguages = currentLanguages.includes(skill)
      ? currentLanguages.filter((s) => s !== skill)
      : [...currentLanguages, skill];

    handleChange({

        ...details.skills,
        languages: updatedLanguages,
      },
    );
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Programming Languages
      </Typography>
      <Grid container spacing={2}>
        {programmingLanguages.map((language) => (
          <Grid item xs={6} sm={4} md={3} key={language}>
            <Button
              variant={currentLanguages.includes(language) ? "contained" : "outlined"}
              color={currentLanguages.includes(language) ? "primary" : "default"}
              onClick={() => toggleSkill(language)}
              fullWidth
            >
              {language}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Languages;
