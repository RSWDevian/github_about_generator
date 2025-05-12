//? Component to Show compiled Markdown component
"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Box, useTheme } from "@mui/material";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const ViewerComponent = ({ markdown }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 4,
        width: "100%",
        height: "100%",
        overflowY: "auto",
        color: "#f1f1f1",
        borderRadius: 2,
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
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]} // ⬅️ Enable HTML rendering
        remarkPlugins={[remarkGfm]}
        components={{
          span: ({ node, ...props }) => <span {...props} />,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </Box>
  );
};

export default ViewerComponent;
