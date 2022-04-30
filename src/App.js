import React from 'react';
import { ChakraProvider, VStack, theme } from '@chakra-ui/react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from "./components/projects/Projects";
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
