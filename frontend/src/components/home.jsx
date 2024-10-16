/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Container, Box } from '@mui/material';
import ServiceCard from './ServiceCard';
import CarIcon from '../assets/Car.png';
import AutoIcon from '../assets/Auto.png';
import BikeIcon from '../assets/Bike.png';

const faresData = [
  {
    vehicleType: 'Car',
    fares: [
      { service: 'Ola', price: 100, pickupTime: 5 },
      { service: 'Uber', price: 110, pickupTime: 7 },
      { service: 'Rapido', price: 90, pickupTime: 6 },
    ],
    icon: CarIcon, // Add the Car icon
  },
  {
    vehicleType: 'Auto',
    fares: [
      { service: 'Ola', price: 50, pickupTime: 4 },
      { service: 'Uber', price: 55, pickupTime: 6 },
      { service: 'Rapido', price: 45, pickupTime: 5 },
    ],
    icon: AutoIcon, // Add the Auto icon
  },
  {
    vehicleType: 'Bike',
    fares: [
      { service: 'Ola', price: 30, pickupTime: 3 },
      { service: 'Uber', price: 35, pickupTime: 5 },
      { service: 'Rapido', price: 25, pickupTime: 4 },
    ],
    icon: BikeIcon, // Add the Bike icon
  },
];

function Home() {
  useEffect(() => {
    // Set the body background color to black
    document.body.style.backgroundColor = 'black';

    // Cleanup function to reset the background when component is unmounted
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: 'black', // Dark background
        minHeight: '100vh',
        padding: 4,
        borderRadius: 2,
      }}
    >
      {/* Display Service Cards */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', // Align cards in a row
          flexWrap: 'nowrap',   // Prevent wrapping on large screens
          gap: 4,               // Space between cards
          justifyContent: 'center', 
          color: 'white',
          width: '100%',        // Ensure full width for the container
          '@media (max-width: 768px)': {
            flexWrap: 'wrap',   // Wrap on smaller screens
            justifyContent: 'center',
          },
        }}
      >
        {faresData.map((data, index) => (
          <ServiceCard key={index} fares={data.fares} icon={data.icon} />
        ))}
      </Box>
    </Container>
  );
}

export default Home;
