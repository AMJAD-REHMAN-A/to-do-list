import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const TodoForm = ({ initialValues, onSubmit }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState(initialValues.title || '');
  const [description, setDescription] = useState(initialValues.description || '');

  const handleSubmit = () => {
    const taskData = { id: id || uuid(), title, description };
    onSubmit(taskData);
    navigate('/');
  };

  return (
    <Container >
      <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
        <Typography variant="h6">{id ? 'Edit Task' : 'Create New Task'}</Typography>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {id ? 'Save' : 'Submit'}
        </Button>
      </Box>
    </Container>
  );
};

export default TodoForm;
