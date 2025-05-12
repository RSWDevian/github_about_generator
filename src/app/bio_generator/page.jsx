"use client";
import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
//? importing components
import personalComponent from "@/components/personalComponent"; // shows the personal about of the user
import skillsComponent from "@/components/skillsComponent"; // shows the skills of the user
import linksComponent from "@/components/linksComponent"; // shows the links provided by the user
import graphsComponent from "@/components/graphsComponent"; // shows graphical representations of the user
import viewerComponent from "@/components/viewerComponent"; // viewer for the user
import PersonalComponent from "@/components/personalComponent";
import SkillsComponent from "@/components/skillsComponent";

function Page() {
  //* for using the defined theme
  const theme = useTheme();

  //* for storing the details set by the user
  const [details, setDetails] = useState({
    about: "",
    skills: [
      {
        name: "",
        icon: "",
      },
    ],
    links: [
      {
        name: "",
        icon: "",
        link: "",
      },
    ],
    graphs: "",
  });

  //& Functions to handle the field changes

  //? Function to handle change in personal details
  const handlePersonalDetails = (newAbout) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      about: newAbout,
    }));
  };

  //? Function to handle change in skills details
  const handleSkillsDetails = (newSkills) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      skills: newSkills,
    }));
  };

  //? Function to handle change in links details
  const handleLinksDetails = (newLinks) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      links: newLinks,
    }));
  };

  //? Function to handle change in graphs details
  const handleGraphDetails = (newGraphs) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      details: newGraphs,
    }));
  };

  return (
    <Box
      display="flex"
      height="100vh"
      width="100%"
      bgcolor={theme.palette.background.default}
    >
      {/* Left Half */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color={theme.palette.primary.main}
        sx={{
          borderRight: `2px solid ${theme.palette.primary.main}`, // Add a border to the right
        }}
      >
        <Typography variant="h4">Create</Typography>
        <PersonalComponent
          details={details}
          handleChange={handlePersonalDetails}
        />
        <SkillsComponent details={details} handleChange={handleSkillsDetails} />
      </Box>

      {/* Right Half */}
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        color={theme.palette.secondary.contrastText}
      >
        <Typography variant="h4">Viewer</Typography>
      </Box>
    </Box>
  );
}

export default Page;
