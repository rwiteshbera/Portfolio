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
} from '@chakra-ui/react';
import {GiHamburgerMenu} from "react-icons/gi";
import "./MobileMenu.css"

const MobileMenu = () => {
  return (
   <div className='mobile_menu'>
      <Menu >
      <MenuButton 
      as={IconButton}
      icon={<GiHamburgerMenu/>}
      aria-label="Options" variant="outline" />
      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘⇧N">Open Closed Tab</MenuItem>
        <MenuItem command="⌘O">Open File...</MenuItem>
      </MenuList>
    </Menu>
   </div>
  );
};

export default MobileMenu;
