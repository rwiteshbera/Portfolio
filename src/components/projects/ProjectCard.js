import {VStack, Image, Box} from '@chakra-ui/react';
import React from 'react';
import './ProjectCard.css';

const ProjectCard = props => {
  return (
    <>
      <VStack fontSize="1.4em" className='project_card' gap="1">
        <Image src={props.imgSrc} id="image" />
        <Box className='description' textAlign="center" bg="rgb(40,36,40)" width="100%" textDecor="none">
            {props.name}
        </Box>
      </VStack>
    </>
  );
};

export default ProjectCard;
