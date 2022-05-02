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
          <Box boxSize={['sm', 'md', 'md', 'md']} m={['4', '4', '4', '8']}>
            <Image
              src={profilePic}
              alt="Rwitesh Bera"
              w={['80vw', '85vw', '90vw', '40vw']}
              ml={["2","3","4","4"]}
            />
          </Box>
        </Container>
        <Container>
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
