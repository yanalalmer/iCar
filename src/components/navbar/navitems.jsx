import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../globalStyles/screens';
import { menuStyles } from './menuStyle';

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
    `}
`;
const NavItem = styled.li`
  ${tw`
        text-xs
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}
  color: ${({ isMobile }) => (isMobile ? 'white' : 'black')};
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem isMobile={isMobile}>
            <a href='#home'>Home</a>
          </NavItem>
          <NavItem isMobile={isMobile}>
            <a href='#cars'>Cars</a>
          </NavItem>
          <NavItem isMobile={isMobile}>
            <a href='#services'>Services</a>
          </NavItem>
          <NavItem isMobile={isMobile}>
            <a href='#contact'>Contact Us</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }
  return (
    <ListContainer>
      <NavItem>
        <a href='#home'>Home</a>
      </NavItem>
      <NavItem>
        <a href='#cars'>Cars</a>
      </NavItem>
      <NavItem>
        <a href='#services'>Services</a>
      </NavItem>
      <NavItem>
        <a href='#contact'>Contact Us</a>
      </NavItem>
    </ListContainer>
  );
}
