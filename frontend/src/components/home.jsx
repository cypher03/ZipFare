import React from 'react';
import { Container, Box } from '@mui/material';
import ServiceCard from './ServiceCard';

const faresData = [
  {
    vehicleType: 'Car',
    fares: [
      { service: 'Ola', price: 100, pickupTime: 5 },
      { service: 'Uber', price: 110, pickupTime: 7 },
      { service: 'Rapido', price: 90, pickupTime: 6 },
    ],
  },
  {
    vehicleType: 'Auto',
    fares: [
      { service: 'Ola', price: 50, pickupTime: 4 },
      { service: 'Uber', price: 55, pickupTime: 6 },
      { service: 'Rapido', price: 45, pickupTime: 5 },
    ],
  },
  {
    vehicleType: 'Bike',
    fares: [
      { service: 'Ola', price: 30, pickupTime: 3 },
      { service: 'Uber', price: 35, pickupTime: 5 },
      { service: 'Rapido', price: 25, pickupTime: 4 },
    ],
  },
];

function Home() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#121212', // Dark background
        minHeight: '100vh',
        padding: 4,
        borderRadius: 2,
      }}
    >
      {/* Display Service Cards */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
          color: 'white', // Ensure text is readable on dark background
        }}
      >
        {faresData.map((data, index) => (
          <ServiceCard key={index} fares={data.fares} />
        ))}
      </Box>
    </Container>
  );
}

export default Home;
