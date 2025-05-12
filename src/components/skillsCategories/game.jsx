//? Component to show the game development tools and frameworks section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* Game development tools and frameworks
const gameTools = [
  "Unity",
  "Unreal Engine",
  "Godot",
  "Three.js",
  "Babylon.js",
  "OpenGL",
  "Vulkan",
  "SDL",
];

function Game({ details, handleChange }) {
  //* storing the current game development tools
  const currentGame = details.skills?.game || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (tool) => {
    const updatedGame = currentGame.includes(tool)
      ? currentGame.filter((s) => s !== tool)
      : [...currentGame, tool];

    handleChange({
      ...details.skills,
      game: updatedGame,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Game Development/Graphics
      </Typography>
      <Grid container spacing={2}>
        {gameTools.map((tool) => (
          <Grid item xs={6} sm={4} md={3} key={tool}>
            <Button
              variant={currentGame.includes(tool) ? "contained" : "outlined"}
              color={currentGame.includes(tool) ? "primary" : "default"}
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

export default Game;
