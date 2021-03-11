import React, { useState } from 'react';
import Modal from './Modal';
import { Container } from '../../styles/Container';
import styled from 'styled-components';
import Feature from './Feature';
import PortableText from '../PortableText';
import { breakpoint } from '../../styles/breakpoints';

export default function Features({ heading, body, feature }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(undefined);

  function toggleModalOpen(feature) {
    setIsModalOpen((prevState) => !prevState);
    setModalContent(feature);
  }

  return (
    <div style={{ backgroundColor: 'var(--green)' }} id='features'>
      <Container>
        <FeaturesStyles>
          <Modal
            toggleModalOpen={isModalOpen}
            modalContent={modalContent}
            handleToggleModalOpen={toggleModalOpen}
          />
          <h1>{heading}</h1>
          <PortableText blocks={body} styles={PortableTextStyles} />
          <div className='features'>
            {feature.map((feature) => (
              <Feature
                key={feature.title}
                feature={feature}
                handleClick={toggleModalOpen}
              />
            ))}
          </div>
        </FeaturesStyles>
      </Container>
    </div>
  );
}

const PortableTextStyles = styled.div`
  p {
    margin-top: 1rem;
    color: var(--white);
    font-size: 1.8rem;

    &:not(:first-child) {
      margin: 2rem 0;
    }
  }

  strong {
    font-family: 'Roboto500';
    color: var(--purple);
  }
`;

const FeaturesStyles = styled.div`
  text-align: center;
  padding: 8rem 0;
  position: relative;

  h1 {
    color: var(--white);
  }

  h4 {
    color: var(--white);
  }

  img {
    height: 20px;
    vertical-align: bottom;
  }

  .features {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* BREAKPOINTS */
  @media ${breakpoint.md} {
    margin-bottom: 5rem;

    .features {
      margin-top: 2rem;
    }
  }
`;
