import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" gutterBottom color="primary">
        Welcome to U Devs Student Portal
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Manage intern records, add new students, and view details smoothly.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" size="large" component={Link} to="/students" sx={{ mr: 2 }}>
          View All Students
        </Button>
        <Button variant="outlined" size="large" component={Link} to="/add-student">
          Add New Student
        </Button>
      </Box>
    </Container>
  );
}

export default Home;