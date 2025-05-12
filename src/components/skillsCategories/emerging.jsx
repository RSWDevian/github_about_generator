//? Component to show the emerging technologies section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* Emerging technologies
const emergingTechnologies = [
  "WebAssembly",
  "Blockchain (Solidity, Hardhat)",
  "IPFS",
  "ROS (Robot Operating System)",
  "VR/AR (A-Frame, ARKit, ARCore)",
  "Edge Computing",
  "Federated Learning",
];

function Emerging({ details, handleChange }) {
  //* storing the current emerging technologies
  const currentEmerging = details.skills?.emerging || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (technology) => {
    const updatedEmerging = currentEmerging.includes(technology)
      ? currentEmerging.filter((s) => s !== technology)
      : [...currentEmerging, technology];

    handleChange({
      ...details.skills,
      emerging: updatedEmerging,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Emerging Technologies
      </Typography>
      <Grid container spacing={2}>
        {emergingTechnologies.map((technology) => (
          <Grid item xs={6} sm={4} md={3} key={technology}>
            <Button
              variant={
                currentEmerging.includes(technology) ? "contained" : "outlined"
              }
              color={
                currentEmerging.includes(technology) ? "primary" : "default"
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

export default Emerging;
