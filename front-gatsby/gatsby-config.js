// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env`,
});

const clientConfig = require('./client-config');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: `Owlfy - Employment Reinvented`,
    description: `Owlfy gaat de manier waarop we zakelijk samenwerken opnieuw uitvinden en voorgoed veranderen middels een state-of-the-art softwareoplossing.`,
    author: `Hans ter Horst`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
  ],
};
