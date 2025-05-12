//? Component to show the DevOps tools section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* DevOps tools
const devopsTools = [
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "GitHub Actions",
  "GitLab CI",
  "ArgoCD",
  "Helm",
  "Ansible",
  "Prometheus",
  "Grafana",
];

function DevOps({ details, handleChange }) {
  //* storing the current DevOps tools
  const currentDevOps = details.skills?.devops || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (skill) => {
    const updatedDevOps = currentDevOps.includes(skill)
      ? currentDevOps.filter((s) => s !== skill)
      : [...currentDevOps, skill];

    handleChange({
      ...details.skills,
      devops: updatedDevOps,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        DevOps & CI/CD
      </Typography>
      <Grid container spacing={2}>
        {devopsTools.map((tool) => (
          <Grid item xs={6} sm={4} md={3} key={tool}>
            <Button
              variant={currentDevOps.includes(tool) ? "contained" : "outlined"}
              color={currentDevOps.includes(tool) ? "primary" : "default"}
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

export default DevOps;
