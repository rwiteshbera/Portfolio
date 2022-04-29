import React from 'react';
import {
  HStack,
  Button,
  VStack,
  Flex,
  Spacer,
  Image
} from '@chakra-ui/react';
import RBLogo from "../images/rb.png"
import "./Header.css"

const Header = () => {
  return (
    <>
      <VStack>
        <Flex w="100%" p="4">
          <Image boxSize="20" borderRadius="full" src={RBLogo}  className="myLogo"></Image>
          <Spacer w="60vw"/>
          <Spacer />
          <HStack>
            <Button colorScheme="pink">Projects</Button>
            <Button colorScheme="pink">Blogs</Button>
            <Button colorScheme="pink">Resume</Button>
            <Button colorScheme="pink">Contact</Button>
          </HStack>
        </Flex>
      </VStack>
    </>
  );
};

export default Header;
