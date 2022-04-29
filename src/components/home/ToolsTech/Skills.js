import { Box, Grid, Text, GridItem, Image } from '@chakra-ui/react';
import React from 'react';

const Skills = () => {
  return (
    <>
      <Box pt="16">
        <Text fontSize="3xl" fontWeight="semibold" textAlign="center" mb={16}>
          Tools and Technologies
        </Text>

        <Grid templateColumns="repeat(6, 1fr)" gap='16' m="10">
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            />
            <Text>Java</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <Text>JavaScript</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-plain.svg"
            />
            <Text>Solidity</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <Text>React</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
            <Text>NodeJs</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            />
            <Text>ExpressJs</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            />
            <Text>MongoDB</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <Text>HTML5</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
            <Text>CSS3</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            />
            <Text>SASS</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            />
            <Text>Bootstrap</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            />
            <Text>Git</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            />
            <Text>Docker</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            />
            <Text>Linux</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Image
              w="16" mb="2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
            />
            <Text>Heroku</Text>
          </GridItem>
        </Grid>
      </Box>
      <Box height="10rem"></Box>
    </>
  );
};

export default Skills;
