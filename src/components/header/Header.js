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
import ButtonList from './ButtonList';
import MobileMenu from './mobileMenu/MobileMenu';

const Header = () => {
  const Reload = () => {
    window.location.reload();
  };

  return (
    <>
      <VStack>
        <Flex w="100%">
          <Image
            onClick={Reload}
            boxSize={["10","12","14","16"]}
            borderRadius="full"
            src={RBLogo}
            className="myLogo"
            mt={['4','4','4','3']}
          ></Image>
          <span className="spacer"></span>
          <MobileMenu/>
          <ButtonList />
        </Flex>
      </VStack>
    </>
  );
};

export default Header;
