import React from 'react';
import { graphql } from 'gatsby';
import About from '../components/About';
import Features from '../components/features/Features';
import Layout from '../components/layout/Layout';
import GraphQLErrors from '../components/GraphQLErrors';
import ContactForms from '../components/forms/ContactForms';
import Vacatures from '../components/vacatures/Vacatures';
import SEO from '../components/SEO';
import PageNotFound from '../pages/404';

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      page {
        ...PageInfo
      }
    }
  }
`;

const Page = ({ data, errors }) => {
  if (errors) {
    return (
      <div>
        <GraphQLErrors errors={errors} />
        <p>{errors}</p>
      </div>
    );
  }

  const page = data.page || data.route.page;
  const navLinks = page.navMenu && (page.navMenu.items || []);

  // filter out pages that not available
  if (page.title === 'Frontpage' || page.showWebpage) {
    const content = (page._rawContent || [])
      .filter((c) => !c.disabled)
      .map((c, i) => {
        let el = null;
        switch (c._type) {
          case 'aboutUs':
            el = <About key={c._key} {...c} />;
            break;
          case 'features':
            el = <Features key={c._key} {...c} />;
            break;
          case 'contactForms':
            el = <ContactForms key={c._key} {...c} />;
            break;
          case 'vacatures':
            el = <Vacatures key={c._key} {...c} />;
            break;
          default:
            el = null;
        }
        return el;
      });

    return (
      <Layout navLinks={navLinks}>
        <SEO seo={page.seo} />
        <div>{content}</div>
      </Layout>
    );
  }
  // If page is available, show page not found.
  return <PageNotFound />;
};

export default Page;
