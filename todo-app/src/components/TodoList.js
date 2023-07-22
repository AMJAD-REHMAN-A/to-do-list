import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Box, Radio, Button, Stack, Typography, Container } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { getTasks, deleteTask } from '../services/api';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(getTasks());
    }, []);

    const handleDelete = (taskId) => {
        deleteTask(taskId);
        setTasks(getTasks());
    };

    return (
        <Container >
            <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                <Typography variant="h6">{Array.isArray(tasks) && tasks.length ? "Today Tasks" : "Add New Tasks"}</Typography>
                <List>
                    {tasks.map((task) => (
                        <Box
                            key={task.id}
                            sx={{
                                bgcolor: '#FFFFFF',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                borderRadius: '4px',
                                my: 1,
                            }}
                        >
                            <ListItem key={task.id}>
                                <Radio />
                                <ListItemText primary={task.title} />
                                <ListItemSecondaryAction>
                                    <Stack direction="row" spacing={2}>
                                        <Link to={`/view/${task.id}`}>
                                            <Button variant="contained">View</Button>
                                        </Link>
                                        <Link to={`/edit/${task.id}`}>
                                            <Button variant="contained">Edit</Button>
                                        </Link>
                                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(task.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Stack>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </Box>
                    ))}
                </List>
            </Box>
        </Container>
    );
};

export default TodoList;
