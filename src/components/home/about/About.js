import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <Box p="4" className='aboutContainer'>
        <Heading fontSize={["2rem","2.4rem","3rem","4rem"]} color="orangered" textAlign="center">
          Rwitesh Bera
        </Heading>
        <Heading fontSize={["1rem","1.2rem","1.8rem","2rem"]}color="whiteAlpha.700" mt="1" textAlign="center">
          Full Stack Developer
        </Heading>
        <Box color="white" className="aboutMe" ml={["0.5","0.5","-0.5","-20"]} fontSize={["sm","md","lg"]} pt="2" textAlign="justify">
          <p>
            Hi, There! I'm <span id="name">Rwitesh Bera.</span> A Full Stack
            Developer. I am pursuing B.Tech. in Computer Science and Engineering
            at <span id="name">Academy of Technology</span>, Kolkata, India. I
            love to build cool projects using frameworks I know. Whenever I
            build or learn something new, I share it with other people on
            Linkedin and Twitter. Recently, I have started learning Blockchain
            Development. I believe blockchain will shape the future of the
            Internet.
          </p>
          <br />
          <p>
            I love music. All of my music consumption is meticulously catalogued
            on Spotify and I maintain a Spotify playlist. I'm also into gaming
            and photography. I share my photography on Instagram.
          </p>
          <br />
          <p>Check out the social links below to connect.</p>
        </Box>
      </Box>
    </>
  );
};

export default About;
