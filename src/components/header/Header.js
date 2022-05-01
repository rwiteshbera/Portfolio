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
  const Reload = () => {
    window.location.reload();
  }

  return (
    <>
      <VStack>
        <Flex w="100%" p="4">
          <Image onClick={Reload}
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
            <Link to="/contact"><Button colorScheme="pink">Contact</Button></Link>
          </HStack>
        </Flex>
      </VStack>
    </>
  );
};

export default Header;
