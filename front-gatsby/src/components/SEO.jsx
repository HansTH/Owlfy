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
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='100x100'
        href='/owlfy-icon.png'
      />
      {/* Meta Tags */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='utf-8' />
      <meta name='description' content={metaDescription} />
      <meta
        name='keywords'
        content='Owlfy, Employment Reinvented, Enschede, Zakelijk samenwerken opnieuw uitvinden, Startup, softwareoplossing'
      />
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
        property='og:description'
        content={metaDescription}
        key='ogdescription'
      />
      <meta property='og:type' content='website' key='ogtype' />
      <meta property='og:url' content='https://www.owlfy.com/' key='ogurl' />
      <meta property='og:locale' content='nl_NL' key='oglocale' />
      <meta property='og:site_name' content='Owlfy' key='ogsitename' />
      {children}
    </Helmet>
  );
}
