import { Box, Text, Heading } from '@chakra-ui/react';
import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <Box ml="-28" mt="8">
        <Heading size="3xl" mt="8" color="orangered">
          Rwitesh Bera
        </Heading>
        <Heading size="lg" color="whiteAlpha.700" mt="2">
          Full Stack Developer
        </Heading>
        <Box color="white" className="aboutMe" ml="-3" fontSize="lg" pt="4">
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
