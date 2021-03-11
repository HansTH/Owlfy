import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Container';
import PortableText from './PortableText';
import Image from './Image';
import { breakpoint } from '../styles/breakpoints';

export default function About({ heading, body, cta, image }) {
  return (
    <AboutStyles id='about'>
      <Container>
        <div className='about'>
          <div className='about-text'>
            <h1>{heading}</h1>
            <PortableText blocks={body} styles={BodyStyles} />
            <Link to={cta.route}>
              {cta.title}
              <p>{cta.label}</p>
            </Link>
          </div>
          <div className='about-image'>
            <div className='squares'>
              <div className='square square-back' />
              <div className='square square-front'>
                <Image mainImage={image} width={500} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AboutStyles>
  );
}

const BodyStyles = styled.div`
  p {
    margin-top: 2rem;
    font-size: 1.8rem;

    &:not(:first-child) {
      margin: 2rem 0;
    }
  }

  strong {
    color: var(--green);
    font-family: 'Roboto500';
  }
`;

const AboutStyles = styled.div`
  .about {
    display: flex;
    align-items: center;
    padding: 13rem 0 8rem;
  }

  .about-text {
    width: 52%;

    a {
      background-color: var(--purple);
      color: var(--white);
      padding: 1rem 2rem;
      border-radius: var(--borderRadius);
      display: inline-block;

      p {
        display: block;
        font-size: 1.3rem;
        color: var(--white);
        opacity: 0.6;
        text-align: center;
      }

      &:hover,
      :focus {
        background-color: var(--green);
      }
    }
  }

  .about-image {
    width: 48%;
    height: 500px;

    .squares {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: relative;
    }

    .square {
      width: 80%;
      height: 80%;
      border-radius: 50px;
      position: absolute;
    }
    .square-back {
      background-color: var(--purple);
      transform: rotate(15deg);
    }

    .square-front {
      background-color: var(--green);
      display: flex;
      align-items: center;
      padding: 1rem;

      img {
        width: 100%;
      }
    }
  }

  /* BREAKPOINTS */
  @media ${breakpoint.md} {
    .about {
      flex-direction: column-reverse;
      align-items: center;

      .about-image {
        width: 80vw;
        height: 80vw;
      }

      .about-text {
        margin-top: 2rem;
        text-align: center;
        width: 100%;
      }

      .squares {
        width: 90%;
        align-items: center;
        margin: 0 auto;
      }
    }
  }
`;
