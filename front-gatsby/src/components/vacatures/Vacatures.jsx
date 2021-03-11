import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/Container';
import PortableText from '../PortableText';
import Vacature from './Vacature';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import { breakpoint, size } from '../../styles/breakpoints';

// Slider settings
const settings = {
  dots: true,
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '50px',
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: size.md,
      settings: {
        slidesToShow: 2,
        centerPadding: '60px',
      },
    },
    {
      breakpoint: size.sm,
      settings: {
        slidesToShow: 1,
        centerPadding: '20px',
      },
    },
    {
      breakpoint: size.xs,
      settings: {
        slidesToShow: 1,
        centerPadding: '20px',
      },
    },
  ],
};

export default function Vacatures({ heading, body, vacature }) {
  return (
    <VacaturesStyles id='vacatures'>
      <Container>
        <h1>{heading}</h1>
        <PortableText blocks={body} styles={PortableTextStyles} />
        <Slider {...settings}>
          {vacature.map((vacature, index) => (
            <Vacature key={index} vacature={vacature} />
          ))}
        </Slider>
      </Container>
    </VacaturesStyles>
  );
}

const PortableTextStyles = styled.div`
  p {
    margin-top: 1rem;
    font-size: 1.8rem;

    &:not(:first-child) {
      margin: 2rem;
    }
  }
`;

const VacaturesStyles = styled.div`
  text-align: center;
  padding: 8rem 0;

  .slick-list {
    padding: 3rem 2rem !important;
  }

  .slick-dots li button:before {
    color: var(--purple) !important;
  }

  .slick-prev:before,
  .slick-next:before {
    color: var(--purple) !important;
  }

  /* BREAKPOINTS */
  @media ${breakpoint.md} {
    margin-bottom: 5rem;

    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`;
