import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Button, Grid, TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Students({ students, onDeleteStudent }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student List
      </Typography>

      <TextField
        label="Search Student by Name"
        variant="outlined"
        fullWidth
        sx={{ mb: 4 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredStudents.length === 0 ? (
        <Typography variant="h6" color="textSecondary" align="center" sx={{ mt: 4 }}>
          No students yet.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredStudents.map((student) => (
            <Grid item xs={12} sm={6} md={4} key={student.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                  <Typography variant="h6">{student.name}</Typography>
                  <Typography color="textSecondary">{student.email}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Course: <strong>{student.course}</strong>
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                  <Button size="small" variant="outlined" component={Link} to={`/student/${student.id}`}>
                    View Details
                  </Button>
                  <Button size="small" variant="contained" color="error" onClick={() => onDeleteStudent(student.id)}>
                    Delete
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Students;