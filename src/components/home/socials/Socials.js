import React from 'react';
import { Flex, IconButton, Link } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import './Socials.css';

const Socials = () => {
  return (
    <>
      <Flex
        justify={['center', 'center', 'center', 'left']}
        gap={['2', '3', '4', '4']} 
      >
        <Link href="https://www.linkedin.com/in/rwitesh-bera/" isExternal>
          <IconButton
            icon={<FaLinkedinIn />}
            isRound="true"
            _hover={{
              background: 'black',
              color: 'white',
              border: '2px solid white',
            }}
          ></IconButton>
        </Link>
        <Link href="https://twitter.com/RwiteshBera" isExternal>
          <IconButton
            icon={<FaTwitter />}
            isRound="true"
            _hover={{
              background: 'black',
              color: 'white',
              border: '2px solid white',
            }}
          ></IconButton>
        </Link>
        <Link href="https://github.com/rwiteshbera" isExternal>
          <IconButton
            icon={<FaGithub />}
            isRound="true"
            _hover={{
              background: 'black',
              color: 'white',
              border: '2px solid white',
            }}
          ></IconButton>
        </Link>
        <Link href="https://www.instagram.com/rwiteshbera/" isExternal>
          <IconButton
            icon={<FaInstagram />}
            isRound="true"
            _hover={{
              background: 'black',
              color: 'white',
              border: '2px solid white',
            }}
          ></IconButton>
        </Link>
      </Flex>
    </>
  );
};

export default Socials;
