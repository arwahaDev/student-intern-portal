import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Button, Box } from '@mui/material';

function StudentDetail({ students }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.id === parseInt(id) || s.id === id);

  if (!student) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h5" color="error">
          Student Not Found!
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/students')}>
          Back to Students
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Student Profile
        </Typography>
        <Typography variant="h6"><strong>ID:</strong> {student.id}</Typography>
        <Typography variant="h6"><strong>Name:</strong> {student.name}</Typography>
        <Typography variant="h6"><strong>Email:</strong> {student.email}</Typography>
        <Typography variant="h6"><strong>Course:</strong> {student.course}</Typography>

        <Box sx={{ mt: 3 }}>
          <Button variant="contained" onClick={() => navigate('/students')}>
            Back to List
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default StudentDetail;