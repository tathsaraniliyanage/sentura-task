import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import CreateUser from './components/CreateUser';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weavy - cloud 
          </Typography>
          <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Users</Link>
          <Link to="/create" style={{ color: 'white' }}>Create User</Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <Routes>
         
        <Route path="/" element={<CreateUser />} />

         
        </Routes>
      </Container>
    </Router>
  );
};

export default App;