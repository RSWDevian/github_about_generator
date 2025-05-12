//? This component helps in getting the details about the user details
import React, { useState } from "react";
import { Box, TextField, Typography, Button, useTheme } from "@mui/material";

function PersonalComponent({ details, handleChange }) {

  //* to use the app themes
  const theme = useTheme();

  //? Function to handle the change in about textbox
  const handleAboutChange = (value) => {
    handleChange(value);
  }

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      p={2}
      gap={2}
    >
      <Typography variant="h5">About:</Typography>
      <TextField
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={details.about}
        onChange={(e) => handleAboutChange(e.target.value)}
        placeholder="Your Name, Interests, Current works, etc"
        InputProps={{
          sx: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main, // Use theme's primary color for the border
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main, // Ensure hover state uses the same color
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main, // Ensure focus state uses the same color
            },
          },
        }}
      />
    </Box>
  );
}

export default PersonalComponent;