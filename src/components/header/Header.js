import React from 'react';
import {
  HStack,
  Button,
  VStack,
  Flex,
  Spacer,
  Image,
  Link as LinkChakra,
} from '@chakra-ui/react';
import RBLogo from '../images/rb.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <VStack>
        <Flex w="100%" p="4">
          <Image
            boxSize="20"
            borderRadius="full"
            src={RBLogo}
            className="myLogo"
          ></Image>
          <Spacer w="60vw" />
          <Spacer />
          <HStack>
            <Link to="/">
              <Button colorScheme="pink">Home</Button>
            </Link>
            <Link to="/projects">
              <Button colorScheme="pink">Projects</Button>
            </Link>
            <LinkChakra href="https://rwiteshbera.me/" isExternal>
              {' '}
              <Button colorScheme="pink">Blogs</Button>
            </LinkChakra>
            <Button colorScheme="pink">Resume</Button>
            <Button colorScheme="pink">Contact</Button>
          </HStack>
        </Flex>
      </VStack>
    </>
  );
};

export default Header;
