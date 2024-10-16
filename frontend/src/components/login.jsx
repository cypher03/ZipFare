/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, TextField, Button, Typography } from "@mui/material";

function SignIn() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/uber-style");
  };
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
          padding: 4,
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: 3,
          bgcolor: "background.paper",
        }}
      >
        {/* Title */}
        <Typography variant="h4" component="h1" gutterBottom>
          Sign In
        </Typography>

        {/* Email Field */}
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        {/* Password Field */}
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        {/* Sign In Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "20px" }}
          onClick={handleClick}
        >
          Sign In
        </Button>

        {/* Optional: Forgot Password link */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { sm: 2, xs: 0 },
          }}
        >
          <a href="/reset-password">
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginTop: "10px" }}
            >
              Forgot password?
            </Typography>
          </a>
          <a href="/signup">
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginTop: "10px" }}
            >
              New user? Sign up
            </Typography>
          </a>
        </Box>
      </Box>
    </Container>
  );
}

export default SignIn;
