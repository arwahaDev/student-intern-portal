import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0b2f8f' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Intern Student Portal
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/students">Students</Button>
          <Button color="inherit" component={Link} to="/add-student">Add Student</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;