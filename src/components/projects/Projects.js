import { GridItem, Text, Grid, Center, Link } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';

const Projects = () => {
  return (
    <>
      <div className="projects">
        <Text fontSize="2xl" fontWeight="semibold" textAlign="center">
          Projects
        </Text>
        <Center w="100vw">
          <Grid className='projects_grid' m="10">
            <Link href="https://github.com/rwiteshbera/Wordle-Clone" isExternal>
              <GridItem>
                <ProjectCard
                  imgSrc="https://user-images.githubusercontent.com/73098407/166095764-dbcf1c7f-6859-4237-a299-5382c55540c9.png"
                  name="Wordle Clone"
                />
              </GridItem>
            </Link>

            <Link href="https://github.com/rwiteshbera/YearnQuest" isExternal>
              <GridItem>
                <ProjectCard
                  imgSrc="https://raw.githubusercontent.com/rwiteshbera/YearnQuest/master/public/images/homePage.png"
                  name="YearnQuest"
                />
              </GridItem>
            </Link>

            <Link
              href="https://github.com/rwiteshbera/Cure-Connect-Hack-The-League"
              isExternal
            >
              <GridItem>
                <ProjectCard
                  imgSrc="https://user-images.githubusercontent.com/73098407/153747544-809dd691-f3ed-4557-bffd-d44804fc358e.jpeg"
                  name="CureConnect"
                />
              </GridItem>
            </Link>
            <Link
              href="https://github.com/rwiteshbera/URL-Shortener"
              isExternal
            >
              <GridItem>
                <ProjectCard
                  imgSrc="https://user-images.githubusercontent.com/73098407/159175710-55a5e276-e14a-458f-afca-92f11cd2c13d.png"
                  name="URL Shortener"
                />
              </GridItem>
            </Link>
          </Grid>
        </Center>
      </div>
    </>
  );
};

export default Projects;
