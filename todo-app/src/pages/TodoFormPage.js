import React from 'react';
import { useParams } from 'react-router-dom';
import { getTasks, createTask, updateTask } from '../services/api';
import TodoForm from '../components/TodoForm';

const TodoFormPage = () => {
    const { id } = useParams();
    const initialValues = id ? getTasks().find((task) => task?.id === id) : {};

    const handleSubmit = (taskData) => {
        if (id) {
            updateTask(id, taskData);
        } else {
            createTask(taskData);
        }
    };

    return <TodoForm initialValues={initialValues} onSubmit={handleSubmit} />;
};

export default TodoFormPage;
