import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({ children, seo }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = seo.description || data.site.siteMetadata.description;

  return (
    <Helmet titleTemplate={`%s`}>
      <html lang='nl' />
      <title>{seo.title || data.site.siteMetadata?.title}</title>
      {/* Fav Icons */}
      <link rel='icon' type='image/svg+xml' href='/owlfy-icon.png' />
      <link rel='alternate icon' href='/owlfy-icon.png' /> {/* fallback */}
      {/* Meta Tags */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='utf-8' />
      <meta name='description' content={metaDescription} />
      {/* Open Graph */}
      <meta
        property='og:image'
        content={seo.image.asset.url || '/owlfy-icon.png'}
      />
      <meta
        property='og:title'
        content={seo.title || data.site.siteMetadata.title}
        key='ogtitle'
      />
      <meta
        property='og:site_name'
        content={metaDescription}
        key='ogsitename'
      />
      <meta
        property='og:description'
        content={metaDescription}
        key='ogdescription'
      />
      {children}
    </Helmet>
  );
}
