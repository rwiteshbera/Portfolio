import React from 'react';
import {
  VStack,
  Flex,
  Image,
} from '@chakra-ui/react';
import RBLogo from '../images/rb.png';
import './Header.css';
import ButtonList from './buttonList/ButtonList';
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
            mt={['3','4','4','4']}
            ml={['1','1','1','2']}
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
