import client from 'part:@sanity/base/client';
import { MdLink } from 'react-icons/md';

function myAsyncSlugifier(input) {
  const query = '*[_id == $id][0]';
  const params = { id: input._ref };
  return client.fetch(query, params).then((doc) => {
    return doc.title.toLowerCase().replace(/\s+/g, '-').slice(0, 200);
  });
}

export default {
  title: 'Landing Pagina Routes',
  name: 'route',
  type: 'document',
  icon: MdLink,
  initialValue: {
    useSiteTitle: false,
  },
  fields: [
    {
      title: 'Welke Pagina,',
      name: 'page',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      description:
        'Welke pagina wil je gebruiken? Belangrijk is dat de pagina al is aangemaakt en gepubliceerd.',
      to: [
        {
          type: 'page',
        },
      ],
    },
    {
      title: 'Navigatie Route',
      name: 'slug',
      description:
        'Dit is de naam voor de navigatie route. Klik de "Generate" button om automatische een naam in te vullen.',
      type: 'slug',
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          if (slug && slug.current && slug.current === '/') {
            return '/ is niet mogelijk ';
          }
          return true;
        }),
      options: {
        source: 'page',
        // Read more: https://www.sanity.io/docs/slug-type
        slugify: myAsyncSlugifier,
      },
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'slug.current',
      subtitle: 'page.title',
    },
    prepare({ title, subtitle }) {
      return {
        title: ['/', title].join(''),
        subtitle,
      };
    },
  },
};
