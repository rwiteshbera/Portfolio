import React from 'react';
import {
  HStack,
  Button,
  Heading,
  VStack,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <>
      <VStack>
        <Flex w="100%" p="4">
          <Heading ml="8" size="md" fontWeight="semibold" fontSize="2xl" color="orangered">
            RB
          </Heading>
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
