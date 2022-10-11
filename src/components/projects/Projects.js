import { GridItem, Text, Grid, Center, Link } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';

// Project Images
import yearnQuest_Img from './Project_Images/yearnquest.png';
import pixby_Img from './Project_Images/pixby.png';
import cureConnect_Img from './Project_Images/cureconnect.jpg';
import decentMail_Img from './Project_Images/decentmail.png';
import miniUrl_Img from './Project_Images/miniurl.jpg';
import hypethehike_Img from './Project_Images/hypethehike.png';

const Projects = () => {
  return (
    <>
      <div className="projects">
        <Text
          fontSize="2xl"
          fontWeight="semibold"
          textAlign="center"
          color="white"
        >
          Projects
        </Text>
        "center"
        <Center w="100vw">
          <Grid className="projects_grid" m="10">
            <Link
              href="https://github.com/rwiteshbera/Hacking-Heist-2.0__Decent_mail"
              isExternal
            >
              <GridItem>
                <ProjectCard imgSrc={decentMail_Img} name="Decent Mail" />
              </GridItem>
            </Link>

            <Link href="https://github.com/rwiteshbera/Pixby" isExternal>
              <GridItem>
                <ProjectCard imgSrc={pixby_Img} name="Pixby" />
              </GridItem>
            </Link>

            <Link href="https://github.com/rwiteshbera/YearnQuest" isExternal>
              <GridItem>
                <ProjectCard imgSrc={yearnQuest_Img} name="YearnQuest" />
              </GridItem>
            </Link>

            <Link
              href="https://github.com/rwiteshbera/Cure-Connect-Hack-The-League"
              isExternal
            >
              <GridItem>
                <ProjectCard imgSrc={cureConnect_Img} name="CureConnect" />
              </GridItem>
            </Link>

            <Link
              href="https://github.com/rwiteshbera/URL-Shortener"
              isExternal
            >
              <GridItem>
                <ProjectCard imgSrc={miniUrl_Img} name="URL Shortener" />
              </GridItem>
            </Link>

            <Link
              href="https://github.com/rwiteshbera/Hype-The-Hike"
              isExternal
            >
              <GridItem>
                <ProjectCard imgSrc={hypethehike_Img} name="Hype The Hike" />
              </GridItem>
            </Link>
          </Grid>
        </Center>
      </div>
    </>
  );
};

export default Projects;
