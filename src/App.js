import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import "./App.css";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
      <Header />
      <Home />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
