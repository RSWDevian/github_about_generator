"use client";
import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
//? importing components
import PersonalComponent from "@/components/personalComponent";
import SkillsComponent from "@/components/skillsComponent";
import LinksComponent from "@/components/linksComponent";

function Page() {
  //* for using the defined theme
  const theme = useTheme();

  //* for storing the details set by the user
  const [details, setDetails] = useState({
    about: "",
    skills: {
      languages: [],
      frontend: [],
      backend: [],
      tools: [],
      databases: [],
      clouds: [],
      devops: [],
      ai: [],
      mobiledev: [],
      testing: [],
      developertools: [],
      security: [],
      webprotocols: [],
      uiux: [],
      cms: [],
      build: [],
      localization: [],
      embedded: [],
      emerging: [],
      qt: [],
      game: [],
    },
    links: {
      professional: {
        linkedin: "",
        xing: "",
        angellist: "",
        wellfound: "",
      },
      developer: {
        github: "",
        gitlab: "",
        bitbucket: "",
        stackoverflow: "",
        devto: "",
        hashnode: "",
        replit: "",
      },
      design: {
        dribble: "",
        behance: "",
        adobe: "",
      },
      content: {
        youtube: "",
        twitch: "",
        tiktok: "",
        instagram: "",
      },
      writing: {
        medium: "",
        substack: "",
        reddit: "",
        twitter: "",
      },
      personalwebsite: "",
    },
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
      graphs: newGraphs,
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
        alignItems="center"
        color={theme.palette.primary.main}
        sx={{
          borderRight: "2px solid ${theme.palette.primary.main}",
          overflowY: "scroll",
          height: "100vh",
          "&::-webkit-scrollbar": {
            width: "4px", // Width of the scrollbar
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: theme.palette.background.default, // Background of the scrollbar track
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main, // Color of the scrollbar thumb
            borderRadius: "4px", // Rounded corners for the scrollbar thumb
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: theme.palette.primary.light, // Darker color on hover
          },
        }}
      >
        <Typography variant="h4">Create</Typography>
        <PersonalComponent
          details={details}
          handleChange={handlePersonalDetails}
        />
        <SkillsComponent details={details} handleChange={handleSkillsDetails} />
        <LinksComponent details={details} handleChange={handleLinksDetails} />
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
