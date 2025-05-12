//? importing important modules
import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import {
  FaJsSquare,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";

//? importing important sub components


const skillsList = [
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C++", icon: <FaCode /> }, // Font Awesome doesn't have C++, using generic code icon
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
];

function SkillsComponent({ details, handleChange }) {
  const [skills, setSkills] = useState(details.skills || []);

  const toggleSkill = (skill) => {
    const updatedSkills = skills.includes(skill)
      ? skills.filter((s) => s !== skill)
      : [...skills, skill];

    setSkills(updatedSkills);
    handleChange({ ...details, skills: updatedSkills });
  };

  return (
    <Box p={2}>
      <Typography variant="h5" mb={2}>
        Select Your Skills
      </Typography>
      <Grid container spacing={2}>
        {skillsList.map(({ name, icon }) => (
          <Grid item xs={6} sm={4} md={3} key={name}>
            <Button
              variant={skills.includes(name) ? "contained" : "outlined"}
              color={skills.includes(name) ? "primary" : "default"}
              onClick={() => toggleSkill(name)}
              startIcon={icon}
              fullWidth
            >
              {name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SkillsComponent;