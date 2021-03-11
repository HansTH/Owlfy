import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import Image from '../Image';
import { breakpoint } from '../../styles/breakpoints';

export default function Vacature({ vacature }) {
  return (
    <a href='/'>
      <VacatureStyles>
        <div className='vacature-icon'>
          <Image mainImage={vacature.image} />
        </div>
        <div className='vacature-text'>
          <h4>{vacature.heading}</h4>
          <PortableText blocks={vacature.body} styles={PortableTextStyles} />
        </div>
      </VacatureStyles>
    </a>
  );
}

const PortableTextStyles = styled.div`
  p {
    margin-top: 0.5rem;
  }
`;

const VacatureStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  padding: 2rem;
  box-shadow: 2px 4px 15px 2px rgba(124, 124, 124, 0.5);
  border-radius: 6px;
  margin-top: 5rem;
  transition: transform ease-in-out 0.2s;

  &:hover,
  :focus {
    transform: scale(1.05);
  }

  .vacature-text {
    h4 {
      color: var(--green);
      text-transform: uppercase;
    }
  }

  .vacature-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: var(--purple);
    border-radius: 50%;
    margin-bottom: 2rem;
    img {
      width: 80%;
      object-fit: contain;
    }
  }

  /* BREAKPOINTS */
  @media ${breakpoint.md} {
    margin-top: 2rem;
  }

  @media ${breakpoint.xs} {
    width: 200px;
  }
`;
