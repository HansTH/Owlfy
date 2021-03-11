import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

export default function PageNotFound() {
  const navLinks = [
    {
      title: 'Home',
      route: '/',
    },
  ];

  return (
    <Layout navLinks={navLinks}>
      <PageNotFoundStyles>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </PageNotFoundStyles>
    </Layout>
  );
}

const PageNotFoundStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  background-color: var(--purple);
  h1 {
    font-size: 20rem;
  }
  h2 {
    color: var(--white);
  }
`;
