import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link as LinkChakra,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './MobileMenu.css';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <div className="mobile_menu">
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<GiHamburgerMenu />}
          aria-label="Options"
          variant="outline"
          bg="white"
          _hover={{
            background: 'black',
            color: 'white',
            border: '2px solid white',
          }}
          _active={{
            background: 'black',
            color: 'white',
            border: '2px solid white',
          }}
        />
        <MenuList bg="brand.100" color="white" >
          <Link to="/">
            <MenuItem _focus={{bg:"whitesmoke", color:"black"}} _hover={{bg:"whitesmoke", color:"black"}}>Home</MenuItem>
          </Link>
          <Link to="/projects">
            <MenuItem _hover={{bg:"whitesmoke", color:"black"}}> Projects</MenuItem>
          </Link>
          <LinkChakra href="https://rwiteshbera.hashnode.dev/" isExternal>
            <MenuItem _hover={{bg:"whitesmoke", color:"black"}}>Blogs</MenuItem>
          </LinkChakra>
          <LinkChakra href="https://drive.google.com/drive/folders/1AzqQ7oB0bFfn6bPwvj6LXnzoaJWQWVg6?usp=sharing" target="_blank">
            <MenuItem _hover={{bg:"whitesmoke", color:"black"}}>Resume</MenuItem>
          </LinkChakra>
          <Link to="/contact">
            <MenuItem _hover={{bg:"whitesmoke", color:"black"}}>Contact</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </div>
  );
};

export default MobileMenu;
