import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon, Edit as EditIcon, DeleteOutline as DeleteIcon } from '@mui/icons-material';
import { getTasks, deleteTask } from '../services/api';

const ViewTodo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const task = getTasks().find((task) => task.id === id);

  if (!task) {
    return <Typography variant="h6">Task not found.</Typography>;
  }

  const handleBack = () => {
    navigate("/");
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    deleteTask(id);
    navigate("/");
  };

  return (
    <Container>
      <Box sx={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
        <Typography variant="h6">Title: {task.title}</Typography>
        <Typography variant="body1">Description: {task.description}</Typography>
      </Box>
      <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'row', alignItems: 'left' }}>
        <Button startIcon={<ArrowBackIcon />} onClick={handleBack}>
          Back
        </Button>
        <Button startIcon={<EditIcon />} onClick={handleEdit}>
          Edit
        </Button>
        <Button startIcon={<DeleteIcon />} onClick={handleDelete}>
          Delete
        </Button>
      </Box>
    </Container>
  );
};

export default ViewTodo;
