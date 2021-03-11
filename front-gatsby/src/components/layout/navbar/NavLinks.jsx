import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoint } from '../../../styles/breakpoints';
import CTA from '../../CTA';

export default function NavLinks({ navLinks }) {
  return (
    <NavLinkStyles>
      {navLinks &&
        navLinks.map((link, index) => (
          <CTA key={index} cta={link} className='nav-link' />
        ))}
    </NavLinkStyles>
  );
}

const NavLinkStyles = styled.div`
  .nav-link:not(:last-child) {
    color: var(--purple);
    font-size: 1.6rem;
    padding-right: 1rem;

    &:hover,
    :focus {
      color: var(--green);
    }
  }

  .nav-link:last-child {
    background-color: var(--green);
    color: var(--white);
    padding: 1rem 2rem;
    border-radius: var(--borderRadius);

    &:hover,
    :focus {
      background-color: var(--purple);
    }
  }

  /* BREAKPOINTS */
  @media ${breakpoint.sm} {
    display: none;
  }
`;
