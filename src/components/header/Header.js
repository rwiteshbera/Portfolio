import React from 'react';
import {
  HStack,
  Button,
  Heading,
  VStack,
  Flex,
  Spacer,
  Box,
  Image
} from '@chakra-ui/react';
import RBLogo from "../images/rb.png"
import "./Header.css"

const Header = () => {
  return (
    <>
      <VStack>
        <Flex w="100%" p="4">
          <Image src={RBLogo} className="myLogo"></Image>
          <Spacer w="60vw"/>
          <Spacer />
          <HStack>
            <Button colorScheme="pink">blogs</Button>
            <Button colorScheme="pink">resume</Button>
          </HStack>
        </Flex>
      </VStack>
    </>
  );
};

export default Header;
