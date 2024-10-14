import React from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';

function SignIn() {
    return (
        <Container maxWidth="sm">
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '100px',
                    padding: 4,
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    boxShadow: 3,
                    bgcolor: 'background.paper'
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
                    sx={{ marginTop: '20px' }}
                >
                    Sign In
                </Button>

                {/* Optional: Forgot Password link */}
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
                    Forgot your password? <a href="/reset-password">Reset it here</a>
                </Typography>
            </Box>
        </Container>
    );
}

export default SignIn;
