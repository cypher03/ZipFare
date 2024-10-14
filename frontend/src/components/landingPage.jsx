import React from "react";
import { Container, Box, Paper, Button } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Zipfare from '../assets/zipfare.png';

function LandingPage() {
    return (
        <Container maxWidth="lg" sx={{ marginTop: '74px' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                {/* Text section */}
                <Paper sx={{ flexBasis: '50%', padding: 2, border: 'none', boxShadow: 'none' }}>
                    <h1>Compare Choose and Go!</h1>
                    <p style={{ marginTop: '26px', marginBottom: '30px', maxWidth: '80%' }}>
                        Compare fares from top ride-hailing services and choose the best deal.
                        Save time, save money, ride smarter!
                    </p>
                    <Button variant="contained">Get Started <ArrowForwardRoundedIcon/></Button>
                </Paper>
                {/* Image section */}
                <Paper sx={{ flexBasis: '50%', border: 'none', boxShadow: 'none' }}>
                    <img 
                        src={Zipfare} 
                        alt="Zipfare comparison"
                        style={{ width: '100%', height: 'auto' }} // Ensures the image takes up 100% width and scales proportionally
                    />
                </Paper>
            </Box>
        </Container>
    );
}

export default LandingPage;
