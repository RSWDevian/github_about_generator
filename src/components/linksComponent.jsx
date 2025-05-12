"use client"
import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
//? importing components
import ProfessionalLinks from "./linkCategories/professional";
import DeveloperLinks from "./linkCategories/developer";
import DesignLinks from "./linkCategories/design";
import ContentLinks from "./linkCategories/content";
import WritingLinks from "./linkCategories/writing";
import PersonalLinks from "./linkCategories/personal";

function LinksComponent({ details, handleChange }) {
  //? Function to handle updating a specific link category
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
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Manage Your Links
      </Typography>
      {/* Professional Links */}
      <ProfessionalLinks details={details} handleChange={handleChange} />
      {/* Developer Links */}
      <DeveloperLinks details={details} handleChange={handleChange} />
      {/* Design Links */}
      <DesignLinks details={details} handleChange={handleChange} />     
      {/* Content Links */}
      <ContentLinks details={details} handleChange={handleChange} />
      {/* Writing Links */}
      <WritingLinks details={details} handleChange={handleChange} />
      {/* Personal Website */}
      <PersonalLinks details={details} handleChange={handleChange} />
    </Box>
  );
}

export default LinksComponent;