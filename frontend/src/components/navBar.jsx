/* eslint-disable no-unused-vars */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ButtonAppBar({ onThemeToggle, darkMode }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "'Inter', Arial, Helvetica, sans-serif", fontWeight: 700, fontSize: '38px' }}>
            Zipfare
          </Typography>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="toggle theme"
            onClick={onThemeToggle}
          >
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>

          {/* <Button color="inherit">Zipfare</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
