import React from 'react';
import Image from '../Image';
import styled from 'styled-components';

export default function Feature({ feature, handleClick }) {
  return (
    <FeatureStyles onClick={() => handleClick(feature)}>
      <div className='feature-image'>
        <Image mainImage={feature.image} width={300} />
      </div>
      <h4>{feature.title}</h4>
    </FeatureStyles>
  );
}

const FeatureStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 2rem;

  &:hover,
  :focus {
    transform: scale(1.05);
  }

  .feature-image {
    display: flex;
    align-items: center;
    height: 150px;
    img {
      height: 100%;
      object-fit: contain;
      padding-bottom: 1rem;
    }
  }

  h4 {
    color: var(--white);
  }
`;
