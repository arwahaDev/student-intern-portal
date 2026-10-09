import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h1" color="primary">
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page Not Found
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Go To Home
      </Button>
    </Container>
  );
}

export default NotFound;