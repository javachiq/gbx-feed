import React from 'react';
import { ThemeProvider, Container } from 'react-bootstrap';
import FeedPage from './pages/FeedPage';
import './App.css';

function App () {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <Container fluid>
        <FeedPage/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
