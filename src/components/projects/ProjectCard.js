import { VStack, Image, Box } from '@chakra-ui/react';
import React from 'react';
import './ProjectCard.css';

const ProjectCard = props => {
  return (
    <>
      <VStack className="project_card" gap="1" color="white">
        <Image src={props.imgSrc} id="image" />
        <Box
          className="description"
          textAlign="center"
          bg="rgb(40,36,40)"
          width="100%"
        >
          {props.name}
        </Box>
      </VStack>
    </>
  );
};

export default ProjectCard;
