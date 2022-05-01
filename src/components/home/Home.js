import { Box, Container, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import profilePic from '../images/profile-pic.png';
import Socials from './socials/Socials';
import About from './about/About';
import Graph from './github_graph/Graph';
import Skills from './tools_tech/Skills';

const Home = () => {
  return (
    <>
      <Flex w="100vw" flexWrap="wrap">
        <Container>
          <Box boxSize="sm" m="16">
            <Image src={profilePic} alt="Rwitesh Bera" />
          </Box>
        </Container>
        <Container ml="10rem">
          <About />
          <Socials />
        </Container>
      </Flex>
      <Graph />
      <Skills />
    </>
  );
};

export default Home;
