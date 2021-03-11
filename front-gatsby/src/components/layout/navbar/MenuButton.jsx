import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../../styles/breakpoints';

export default function Menubutton({ isMenuOpen, toggleMenu }) {
  return (
    <MenuButtonStyles isOpen={isMenuOpen} onClick={toggleMenu}>
      <div className='menu-button'>
        <div className='menu-line' />
        <div className='menu-line' />
      </div>
    </MenuButtonStyles>
  );
}

const MenuButtonStyles = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  outline: none;
  z-index: 1000;

  .menu-button {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--purple);
    border-radius: 50%;

    &:hover {
      background-color: var(--green);

      .menu-line {
        background-color: var(--white);
      }
    }

    .menu-line {
      width: 20px;
      height: 2px;
      margin: 3px 0;
      background-color: var(--white);
      border-radius: 2px;
      transition: transform ease-in-out 0.3s;

      :first-child {
        transform: ${({ isOpen }) => isOpen && `translateY(4px) rotate(45deg)`};
      }

      :last-child {
        transform: ${({ isOpen }) =>
          isOpen && `translateY(-4px) rotate(-45deg)`};
      }
    }
  }

  @media ${breakpoint.sm} {
    display: block;
    .menu-button {
      display: flex;
    }
  }
`;
