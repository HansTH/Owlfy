import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Footer from './Footer';
import Navbar from './navbar/Navbar';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import 'normalize.css';

export default function Layout({ children, navLinks }) {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      company: sanityCompany {
        info {
          email
          name
          phone
          city
          image {
            ...SanityImage
          }
        }
        socialMediaLinks {
          name
          url
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Navbar company={data.company} navLinks={navLinks} />
      {children}
      <Footer company={data.company} />
    </>
  );
}
