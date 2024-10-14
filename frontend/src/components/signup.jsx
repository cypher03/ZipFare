import React from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';

function SignUpPage() {
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
                    Sign Up
                </Typography>
                
                {/* Name Field */}
                <TextField 
                    id="name" 
                    label="Name" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal"
                />
                
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
                
                {/* Sign Up Button */}
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    sx={{ marginTop: '20px' }}
                >
                    Sign Up
                </Button>
            </Box>
        </Container>
    );
}

export default SignUpPage;
