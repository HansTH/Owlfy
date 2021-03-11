import React, { useState } from 'react';
import NavLinks from './NavLinks';
import NavLogo from './NavLogo';
import styled from 'styled-components';
import SocialLinks from '../../socialMedia/SocialLinks';
import { breakpoint } from '../../../styles/breakpoints';
import Menubutton from './MenuButton';
// import MobileMenu from './MobileMenu';

export default function Navbar({ company, navLinks }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  return (
    <>
      {/* <MobileMenu
        isOpen={isMenuOpen}
        // navLinks={navLinks}
        toggleMenu={toggleMenu}
        socialLinks={company.socialMediaLinks}
      /> */}
      <NavbarStyles>
        <div className='navbar'>
          <NavLogo logo={company.info.image} />
          <div className='social-links'>
            <SocialLinks
              links={company.socialMediaLinks}
              color={'var(--green)'}
              hoverColor={'var(--purple)'}
              width={41}
            />
          </div>
          <NavLinks navLinks={navLinks} />
          <Menubutton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </NavbarStyles>
    </>
  );
}

const NavbarStyles = styled.nav`
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 90;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(10px);

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem 0;
    height: 80px;
  }

  /* BREAKPOINTS */
  @media ${breakpoint.sm} {
    .social-links {
      display: none;
    }
  }
`;
