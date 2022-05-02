import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
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
        />
        <MenuList>
          <Link to="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="/projects">
            <MenuItem>Projects</MenuItem>
          </Link>
          <LinkChakra href="https://rwiteshbera.me/" isExternal>
            <MenuItem>Blogs</MenuItem>
          </LinkChakra>
          <Link to="">
            <MenuItem>Resume</MenuItem>
          </Link>
          <Link to="/contact">
            <MenuItem>Contact</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </div>
  );
};

export default MobileMenu;
