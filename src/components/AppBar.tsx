import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Typography variant="h6"  sx={{ mr: 3 }}>
            <Link style={{ color:"white"}} href="/registration">Registration</Link>
          </Typography>
          <Typography variant="h6" sx={{ mr: 3 }} >
            <Link style={{ color:"white"}} href="/anagram">Anagram Checker</Link>
          </Typography>
          <Typography variant="h6"  sx={{ flexGrow: 1 }}>
            <Link style={{ color:"white"}} href="/temptracker">Temp Checker</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}