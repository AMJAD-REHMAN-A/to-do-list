import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from "@mui/material"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TodoFormPage from './pages/TodoFormPage';
import ViewTodo from './pages/ViewTodo';

const App = () => {
  return (
    <Router>
        <Navbar />
        <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<TodoFormPage />} />
          <Route exact path="/edit/:id" element={<TodoFormPage />} />
          <Route exact path="/view/:id" element={<ViewTodo />} />
        </Routes>
        </Container>
    </Router>
  );
};

export default App;
