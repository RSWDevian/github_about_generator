//? Component to show the web protocols section
"use client";
//? importing important modules
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

//* Web protocols
const webProtocols = [
  "HTTP/3",
  "WebSockets",
  "GraphQL",
  "REST",
  "gRPC",
  "MQTT",
  "SOAP",
];

function WebProtocols({ details, handleChange }) {
  //* storing the current web protocols
  const currentWebProtocols = details.skills?.webprotocols || [];

  //? Function to toggle the buttons activeness and store data in the state
  const toggleSkill = (protocol) => {
    const updatedWebProtocols = currentWebProtocols.includes(protocol)
      ? currentWebProtocols.filter((s) => s !== protocol)
      : [...currentWebProtocols, protocol];

    handleChange({
      ...details.skills,
      webprotocols: updatedWebProtocols,
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Web Protocols/APIs
      </Typography>
      <Grid container spacing={2}>
        {webProtocols.map((protocol) => (
          <Grid item xs={6} sm={4} md={3} key={protocol}>
            <Button
              variant={
                currentWebProtocols.includes(protocol)
                  ? "contained"
                  : "outlined"
              }
              color={
                currentWebProtocols.includes(protocol) ? "primary" : "default"
              }
              onClick={() => toggleSkill(protocol)}
              fullWidth
            >
              {protocol}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WebProtocols;
