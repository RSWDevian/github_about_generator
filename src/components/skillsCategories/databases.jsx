//? Component to show the database skills section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* database technologies
const databaseTechnologies = [
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "SQLite",
  "Firebase Firestore",
  "Redis",
  "Cassandra",
  "Neo4j",
  "DynamoDB",
  "InfluxDB",
];

function Databases({ details, handleChange }) {
  //* storing the current database technologies
  const currentDatabases = details.skills?.databases || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (skill) => {
    const updatedDatabases = currentDatabases.includes(skill)
      ? currentDatabases.filter((s) => s !== skill)
      : [...currentDatabases, skill];

    handleChange({
      ...details.skills,
      databases: updatedDatabases,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Databases
      </Typography>
      <Grid container spacing={2}>
        {databaseTechnologies.map((technology) => (
          <Grid item xs={6} sm={4} md={3} key={technology}>
            <Button
              variant={
                currentDatabases.includes(technology) ? "contained" : "outlined"
              }
              color={
                currentDatabases.includes(technology) ? "primary" : "default"
              }
              onClick={() => toggleSkill(technology)}
              fullWidth
            >
              {technology}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Databases;
