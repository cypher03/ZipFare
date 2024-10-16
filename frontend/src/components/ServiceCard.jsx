/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

function ServiceCard({ fares, icon }) {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelect = (service) => {
    setSelectedService(service);
  };

  const getOptionBackgroundColor = (service) => {
    return selectedService === service ? '#e0f7fa' : 'transparent'; // Light blue when selected, transparent otherwise
  };

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 280, // Increase max width of each card
        borderRadius: 3,
        textAlign: 'center',
        padding: 2,
        backgroundColor: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardContent>
        {/* Vehicle Icon */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <img src={icon} alt="vehicle-icon" style={{ width: 50, height: 50 }} />
        </Box>

        {/* Fares List */}
        {fares.map((fare, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: 1,
              cursor: 'pointer',
              backgroundColor: getOptionBackgroundColor(fare.service),
              borderRadius: 1,
              transition: 'background-color 0.3s',
              marginBottom: 1,
            }}
            onClick={() => handleSelect(fare.service)}
          >
            {/* Service Name and Pickup Time - Aligned Left */}
            <Box sx={{ textAlign: 'left', flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {fare.service}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Pickup in {fare.pickupTime} mins
              </Typography>
            </Box>
            {/* Price - Aligned Right */}
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', textAlign: 'right', color: '#333' }}>
              ₹{fare.price}
            </Typography>
          </Box>
        ))}

        {/* Action Button */}
        <Button
          variant="contained"
          color="primary"
          disabled={!selectedService}
          sx={{
            marginTop: 2,
            width: '100%',
            borderRadius: 3,
            backgroundColor: selectedService ? '#1976d2' : '#757575',
            '&:hover': {
              backgroundColor: selectedService ? '#1565c0' : '#757575',
            },
          }}
        >
          {selectedService ? 'Book' : 'Compare'}
        </Button>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
