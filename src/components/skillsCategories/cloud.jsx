//? Component to show the cloud platforms skills section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* cloud platforms
const cloudPlatforms = [
  "AWS",
  "Google Cloud",
  "Microsoft Azure",
  "DigitalOcean",
  "Vercel",
  "Netlify",
  "Heroku",
  "Supabase",
  "Render",
  "Cloudflare Workers",
];

function Cloud({ details, handleChange }) {
  //* storing the current cloud platforms
  const currentClouds = details.skills?.clouds || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (skill) => {
    const updatedClouds = currentClouds.includes(skill)
      ? currentClouds.filter((s) => s !== skill)
      : [...currentClouds, skill];

    handleChange({
      ...details.skills,
      clouds: updatedClouds,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Cloud Platforms
      </Typography>
      <Grid container spacing={2}>
        {cloudPlatforms.map((platform) => (
          <Grid item xs={6} sm={4} md={3} key={platform}>
            <Button
              variant={
                currentClouds.includes(platform) ? "contained" : "outlined"
              }
              color={currentClouds.includes(platform) ? "primary" : "default"}
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

export default Cloud;
