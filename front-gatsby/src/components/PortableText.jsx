import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

export default function PortableText({ blocks, styles }) {
  const BlockStyles = styles || PortableTextStyles;

  return (
    <BlockStyles>
      <BlockContent blocks={blocks} />
    </BlockStyles>
  );
}

const PortableTextStyles = styled.div`
  p {
    margin-top: 1rem;
    font-size: 1.6rem;

    &:not(:first-child) {
      margin: 2rem 0;
    }
  }
`;
