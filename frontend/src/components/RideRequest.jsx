/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import Zipfare from "../assets/zipfare2.png";

function UberStylePage() {
  const navigate = useNavigate();
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [error, setError] = useState({ src: false, dest: false });
  const handleClick = () => {
    const newerrors = {
      src: source.trim() === "",
      dest: destination.trim() === "",
    };
    setError(newerrors);
    if (newerrors.src === false && newerrors.dest === false) {
      navigate("/home");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "black",
        margin: 0, // Removes any potential margin causing white space
        padding: 0, // Removes any padding
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "80%",
          maxWidth: 900,
          alignItems: "center",
          justifyContent: "space-between", // Align text and image horizontally
        }}
      >
        {/* Left Side Text */}
        <Box
          sx={{
            color: "white",
            flex: 1,
            pr: 10, // Increased padding on the right side to add more gap
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start", // Align text to the left
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Go anywhere with Zipfare
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Request a ride, hop in, and go.
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              variant="filled"
              label="Enter location"
              required
              error={error.src}
              helperText={error.src && "Please enter a source"}
              sx={{
                mb: 2,
                bgcolor: "white",
                borderRadius: 2, // Increased border-radius for input fields
              }}
              onChange={(e) => setSource(e.target.value)}
            />
            <TextField
              fullWidth
              variant="filled"
              label="Enter destination"
              required
              error={error.dest}
              helperText={error.dest && "Destination is required"}
              sx={{
                mb: 3,
                bgcolor: "white",
                borderRadius: 2, // Increased border-radius for input fields
              }}
              onChange={(e) => setDestination(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              onClick={handleClick}
              sx={{
                bgcolor: "#1976d2", // Button color (blue)
                color: "white",
                textTransform: "none",
                fontWeight: "500", // Bold text inside the button
                fontSize: "1.1rem", // Increased font size for the button text
                width: "fit-content",
                px: 4, // Added padding to adjust button width
                py: 1.3, // Adjust padding for button height
                borderRadius: 3, // Increased border-radius for the button
              }}
            >
              See prices
            </Button>
          </Box>
        </Box>

        {/* Right Side Image */}
        <Box
          component="img"
          src={Zipfare} // Replace with your image URL
          alt="Illustration"
          sx={{
            width: "45%", // Reduced the size of the image
            height: "auto",
            borderRadius: 2,
            display: "block",
            alignSelf: "center", // Ensures image aligns with the form
          }}
        />
      </Box>
    </Box>
  );
}

export default UberStylePage;
