import React from 'react';
import {
  HStack,
  Link as LinkChakra,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const ButtonList = () => {
  return (
    <div className="button_list">
      <HStack mt="4" mr="2" className='button_stack'>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
        <LinkChakra href="https://rwiteshbera.me/" isExternal>
          {' '}
          <button>Blogs</button>
        </LinkChakra>
        <button>Resume</button>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </HStack>
    </div>
  );
};

export default ButtonList;
