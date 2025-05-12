//? Component to show the security tools and frameworks section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* Security tools and frameworks
const securityTools = [
  "OAuth2",
  "JWT",
  "Keycloak",
  "Auth0",
  "OpenID Connect",
  "Snyk",
  "bcrypt",
  "Argon2",
];

function Security({ details, handleChange }) {
  //* storing the current security tools
  const currentSecurity = details.skills?.security || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (tool) => {
    const updatedSecurity = currentSecurity.includes(tool)
      ? currentSecurity.filter((s) => s !== tool)
      : [...currentSecurity, tool];

    handleChange({
      ...details.skills,
      security: updatedSecurity,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Security & Auth
      </Typography>
      <Grid container spacing={2}>
        {securityTools.map((tool) => (
          <Grid item xs={6} sm={4} md={3} key={tool}>
            <Button
              variant={
                currentSecurity.includes(tool) ? "contained" : "outlined"
              }
              color={currentSecurity.includes(tool) ? "primary" : "default"}
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

export default Security;
