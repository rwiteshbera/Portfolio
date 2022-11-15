import React from 'react';
import { HStack, Link as LinkChakra} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const ButtonList = () => {
  return (
    <div className="button_list">
      <HStack mt="4" mr="2" className="button_stack">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
        <LinkChakra href="https://rwiteshbera.hashnode.dev/" isExternal>
          {' '}
          <button>Blogs</button>
        </LinkChakra>
        <a href="https://drive.google.com/drive/folders/1AzqQ7oB0bFfn6bPwvj6LXnzoaJWQWVg6?usp=sharing" target="_blank" rel='noreferrer'><button>Resume</button></a>
      </HStack>
    </div>
  );
};

export default ButtonList;
