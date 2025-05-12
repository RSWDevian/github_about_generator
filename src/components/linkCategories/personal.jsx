"use client";
import React from "react";
import { Typography, Grid, TextField } from "@mui/material";

function PersonalLinks({ details, handleChange }) {
  const handleUpdateLink = (category, value) => {
    const updatedLinks = {
      ...details.links,
      [category]: value,
    };
    handleChange(updatedLinks);
  };

  return (
    <>
      <Typography variant="subtitle1" mt={2}>
        Personal Links
      </Typography>

      <TextField
        label={"Personal"}
        variant="outlined"
        fullWidth
        value={details.links.personal}
        onChange={(e) => handleUpdateLink("personal", e.target.value)}
      />
    </>
  );
}

export default PersonalLinks;
