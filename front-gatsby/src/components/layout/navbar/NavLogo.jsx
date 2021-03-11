import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../../styles/breakpoints';
import Image from '../../Image';

export default function NavLogo({ logo }) {
  return (
    <NavLogoStyles>
      <Link to='/'>
        <Image mainImage={logo} />
      </Link>
    </NavLogoStyles>
  );
}

const NavLogoStyles = styled.div`
  width: 150px;
  z-index: 1000;

  @media ${breakpoint.sm} {
    width: 125px;
  }
`;
