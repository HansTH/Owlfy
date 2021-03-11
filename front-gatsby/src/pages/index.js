import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Page from '../templates/page';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query FrontpageQuery {
      page: sanityPage(_id: { regex: "/(draft.|)frontpage/" }) {
        ...PageInfo
      }
    }
  `);

  return <Page data={data} />;
}
