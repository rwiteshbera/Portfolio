import { Box, Grid, Text, GridItem, Image, Center } from '@chakra-ui/react';
import React from 'react';
import './Skills.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';


import etherjs_img from "./ethersjs.svg";

const Skills = () => {
  return (
    <>
      <AnimationOnScroll animateIn="animate__slideInUp" duration="2" animateOnce animatePreScroll="false">
      <Box pt="16" color="white" className="tech-container">
        <Text
          fontSize={['1.2rem', '1.4rem', '1.6rem', '2rem']}
          fontWeight="semibold"
          textAlign="center"
          mb={16}
        >
          Tools and Technologies
        </Text>

        <Center>
          <Grid className="skills_grid" ml="2">
            <GridItem>
              <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              />
              <Text>Java</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <Text>JavaScript</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
               w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-plain.svg"
              />
              <Text>Solidity</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <Text>React</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              />
              <Text>NodeJs</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              />
              <Text>ExpressJs</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
               w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              />
              <Text>MongoDB</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
               w={["10","12","14","16"]}
                mb="2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png"
              />
              <Text>Socket.IO</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src={etherjs_img}
              />
              <Text pt={["4","4","6","6"]}>Ethers.js</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
              <Text>HTML5</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />
              <Text>CSS3</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              />
              <Text>SASS</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
               w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              />
              <Text>Bootstrap</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
               w={["10","12","14","16"]}
                mb="2"
                src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
              />
              <Text>Chakra UI</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              />
              <Text ml="2">Git</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              />
              <Text>Docker</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
              />
              <Text>Linux</Text>
            </GridItem>
            <GridItem>
              <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
              />
              <Text>Heroku</Text>
            </GridItem>
          </Grid>
        </Center>
      </Box>
      <Box height="10rem"></Box>
      </AnimationOnScroll>
    </>
  );
};

export default Skills;
