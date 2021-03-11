import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../../socialMedia/SocialLinks';
import CTA from '../../CTA';

export default function MobileMenu({
  isOpen,
  navLinks,
  toggleMenu,
  socialLinks,
}) {
  return (
    <MobileMenuStyles isOpen={isOpen}>
      {navLinks &&
        navLinks.map((link, index) => (
          <CTA
            key={index}
            cta={link}
            handleClick={toggleMenu}
            className='nav-link'
          />
        ))}
      <div className='social-links'>
        <SocialLinks
          links={socialLinks}
          color={'var(--green)'}
          hoverColor={'var(--white)'}
        />
      </div>
    </MobileMenuStyles>
  );
}

const MobileMenuStyles = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--purple);
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? '0px' : '-100%')};
  transition: top 0.3s ease-in-out;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .nav-link {
    font-size: 2.5rem;
    color: var(--white);
    padding: 2rem 0;

    &:hover,
    :focus {
      color: var(--green);
    }
  }

  .social-links {
    padding: 2rem 0;
  }
`;
