import { graphql } from 'gatsby';

export const PageInfo = graphql`
  fragment PageInfo on SanityPage {
    id
    title
    _rawContent(resolveReferences: { maxDepth: 10 })
    navMenu {
      ...NavMenu
    }
    seo {
      title
      description
      keywords
      image {
        asset {
          url
        }
      }
    }
  }
`;
