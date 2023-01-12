import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import './About.css';
import 'animate.css';
import AnimativeName from './AnimativeText/AnimativeName';

const About = () => {


  return (
    <>
      <Box p={['3', '4', '4', '4']} mb="4" className="aboutContainer">
        <AnimativeName />
        <Heading
          fontSize={['1.2rem', '1.4rem', '1.6rem', '1.6rem']}
          color="whiteAlpha.700"
          mt="1"
          textAlign={['center', 'center', 'center', 'left']}
          className="fullstackdeveloper"
          id='typing'
        >
          Full Stack Developer
        </Heading>
        <Box
          color="white"
          className="aboutMe"
          ml={['0.5', '0.5', '-0.5', '-20']}
          fontSize={['sm', 'md', 'lg']}
          pt={['2', '2', '3', '4']}
          textAlign="justify"
        >
          <p>
            Hi, There! I'm <span id="name">Rwitesh Bera.</span> A Full Stack
            Developer. I am pursuing B.Tech. in Computer Science and Engineering
            at <span id="name">Academy of Technology</span>, Kolkata, India. I
            am passionate about participating in hackathons, exploring new technologies, and contributing to open-source projects. In my spare time, I enjoy listening to music, gaming, and photography. I am particularly interested in web development and blockchain. I have won numerous hackathons and am always eager to learn and grow as a developer.
          </p>
          <br />
          <p>Check out the social links below to connect.</p>
        </Box>
      </Box>
    </>
  );
};

export default About;
