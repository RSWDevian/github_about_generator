//? Compoenent to let the user select and showcase their skills
"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
//? importing sub components
import Languages from "./skillsCategories/languages";
import Frontend from "./skillsCategories/frontend";
import Backend from "./skillsCategories/backend";
import Databases from "./skillsCategories/databases";
import Cloud from "./skillsCategories/cloud";
import DevOps from "./skillsCategories/devops";
import AI from "./skillsCategories/ai";
import MobileDev from "./skillsCategories/mobiledev";
import Testing from "./skillsCategories/testing";
import DeveloperTools from "./skillsCategories/developertools";
import Security from "./skillsCategories/security";
import WebProtocols from "./skillsCategories/webprotocols";
import CMS from "./skillsCategories/cms";
import UIUX from "./skillsCategories/uiux";
import Build from "./skillsCategories/build";
import Localization from "./skillsCategories/localization";
import Embedded from "./skillsCategories/embedded";
import QT from "./skillsCategories/qt";
import Game from "./skillsCategories/game";
import Emerging from "./skillsCategories/emerging";

function SkillsComponent({ details, handleChange }) {
  return (
    <Box p={2}>
      <Typography variant="h5" mb={2}>
        Select Your Skills
      </Typography>
      {/* Programming Languages Section */}
      <Languages details={details} handleChange={handleChange} />
      <Frontend details={details} handleChange={handleChange} />
      <Backend details={details} handleChange={handleChange} />
      <Databases details={details} handleChange={handleChange} />
      <Cloud details={details} handleChange={handleChange} />
      <DevOps details={details} handleChange={handleChange} />
      <AI details={details} handleChange={handleChange} />
      <MobileDev details={details} handleChange={handleChange} />
      <Testing details={details} handleChange={handleChange} />
      <DeveloperTools details={details} handleChange={handleChange} />
      <Security details={details} handleChange={handleChange} />
      <WebProtocols details={details} handleChange={handleChange} />
      <CMS details={details} handleChange={handleChange} />
      <UIUX details={details} handleChange={handleChange} />
      <Build details={details} handleChange={handleChange} />
      <Localization details={details} handleChange={handleChange} />
      <Embedded details={details} handleChange={handleChange} />
      <QT details={details} handleChange={handleChange} />
      <Game details={details} handleChange={handleChange} />
      <Emerging details={details} handleChange={handleChange} />
    </Box>
  );
}

export default SkillsComponent;
