import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Stack, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddStudent({ onAddStudent }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !course) return;

    const newStudent = {
      id: Date.now(),
      name,
      email,
      course,
    };

    onAddStudent(newStudent);
    navigate('/students');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom align="center">
          Add New Student
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Course"
              variant="outlined"
              fullWidth
              required
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
            <Button type="submit" variant="contained" size="large">
              Submit Student
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}

export default AddStudent;