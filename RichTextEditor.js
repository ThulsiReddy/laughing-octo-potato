

import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Container, Typography, Box, Paper } from "@mui/material";

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  // Load saved content from localStorage
  useEffect(() => {
    const savedContent = localStorage.getItem("richTextContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  // Save content to localStorage
  const handleSave = () => {
    localStorage.setItem("richTextContent", content);
    alert("Content saved!");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={6} sx={{ p: 4, background: "linear-gradient(135deg, #f0f4fd, #ffffff)", borderRadius: "16px" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "rgba(24, 80, 132, 0.85)",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
          }}
        >
          Rich Text Editor
        </Typography>

        <Box sx={{ my: 2 }}>
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={{
              toolbar: [
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["clean"],
              ],
            }}
            style={{
              background: "#fdfdfd",
              borderRadius: "12px",
              minHeight: "200px",
            }}
          />
        </Box>

        <Button
          onClick={handleSave}
          variant="contained"
          fullWidth
          sx={{
            background: "linear-gradient(45deg, #64b5f6, #2196f3)",
            color: "#fff",
            fontWeight: "bold",
            mt: 3,
            py: 1.5,
            borderRadius: "8px",
            "&:hover": {
              background: "linear-gradient(45deg, #2196f3, #64b5f6)",
            },
          }}
        >
          Save Content
        </Button>
      </Paper>
    </Container>
  );
};

export default RichTextEditor;
