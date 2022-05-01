import React from 'react';
import { HStack, IconButton, Link } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import "./Socials.css";

const Socials = () => {
  return (
    <>
      <HStack ml="8">
        <Link href="https://www.linkedin.com/in/rwitesh-bera/" isExternal>
          <IconButton
            icon={<FaLinkedinIn />}
            isRound="true"
            background="black"
            color="white"
          ></IconButton>
        </Link>
        <Link href="https://twitter.com/RwiteshBera" isExternal>
          <IconButton
            icon={<FaTwitter />}
            isRound="true"
            background="black"
            color="white"
          ></IconButton>
        </Link>
        <Link href="https://github.com/rwiteshbera" isExternal>
          <IconButton
            icon={<FaGithub />}
            isRound="true"
            background="black"
            color="white"
          ></IconButton>
        </Link>
        <Link href="https://www.instagram.com/rwiteshbera/" isExternal>
          <IconButton
            icon={<FaInstagram />}
            isRound="true"
            background="black"
            color="white"
          ></IconButton>
        </Link>
      </HStack>
    </>
  );
};

export default Socials;
