export default {
  title: 'Call To Action',
  name: 'cta',
  type: 'object',
  fields: [
    {
      title: 'Title',
      description: 'Geef de button of link een naam.',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Label',
      description: 'Geef de button of link een sub titel.',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Webpagina',
      name: 'landingPageRoute',
      description: 'Als u naar een pagina op deze website wilt verwijzen.',
      type: 'reference',
      to: [{ type: 'route' }],
    },
    {
      title: 'Interne Link',
      name: 'route',
      description:
        'Voor navigatie naar een pagina in uw website (bijv.: /blog of #contact-sevenster).',
      type: 'string',
    },
    {
      title: 'Externe link',
      name: 'link',
      type: 'url',
      description:
        'Voor navigatie naar een andere website (bijv.: https://www.sanity.io).',
    },
  ],
  preview: {
    select: {
      title: 'title',
      route: 'route',
      link: 'link',
    },
    prepare({ title, landingPage, route, link }) {
      let subtitle = 'Not set';
      if (route) {
        subtitle = `Route: ${landingPage}`;
      }
      if (route) {
        subtitle = `Route: ${route}`;
      }
      if (link) {
        subtitle = `External: ${link}`;
      }
      return {
        title,
        subtitle,
      };
    },
  },
};
