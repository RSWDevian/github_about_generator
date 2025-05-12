"use client"
import React from "react";
import { Typography, Grid, TextField } from "@mui/material";

function DesignLinks({ details, handleChange }) {
  const handleUpdateLink = (category, field, value) => {
    const updatedLinks = {
      ...details.links,
      [category]: {
        ...details.links[category],
        [field]: value,
      },
    };
    handleChange(updatedLinks);
  };

  return (
    <>
      <Typography variant="subtitle1" mt={2}>
        Design Links
      </Typography>
      <Grid container spacing={2} mb={2}>
        {Object.keys(details.links.design).map((key) => (
          <Grid item xs={12} sm={6} key={key}>
            <TextField
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              variant="outlined"
              fullWidth
              value={details.links.design[key]}
              onChange={(e) =>
                handleUpdateLink("design", key, e.target.value)
              }
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default DesignLinks;
