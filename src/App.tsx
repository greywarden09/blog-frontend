import React from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import BlogEntries from './components/BlogEntries';
import PageLeadingText from './components/PageLeadingText';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <ButtonAppBar />
      <Box sx={{ m: 5 }}>
      <Container>
        <PageLeadingText/>
        <BlogEntries/>
      </Container>
      </Box>
    </div>
  );
}

export default App;
