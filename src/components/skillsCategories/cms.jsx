//? Component to show the CMS platforms section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* CMS platforms
const cmsPlatforms = [
  "WordPress",
  "Strapi",
  "Sanity",
  "Ghost",
  "Contentful",
  "Netlify CMS",
];

function CMS({ details, handleChange }) {
  //* storing the current CMS platforms
  const currentCMS = details.skills?.cms || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (platform) => {
    const updatedCMS = currentCMS.includes(platform)
      ? currentCMS.filter((s) => s !== platform)
      : [...currentCMS, platform];

    handleChange({
      ...details.skills,
      cms: updatedCMS,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        CMS & Content Systems
      </Typography>
      <Grid container spacing={2}>
        {cmsPlatforms.map((platform) => (
          <Grid item xs={6} sm={4} md={3} key={platform}>
            <Button
              variant={currentCMS.includes(platform) ? "contained" : "outlined"}
              color={currentCMS.includes(platform) ? "primary" : "default"}
              onClick={() => toggleSkill(platform)}
              fullWidth
            >
              {platform}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CMS;
