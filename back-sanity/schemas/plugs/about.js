export default {
  title: 'Over Ons',
  name: 'aboutUs',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'portableText',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage',
    },
    {
      title: 'Navigatie Link',
      description: 'Voeg een link toe voor navigatie.',
      name: 'cta',
      type: 'cta',
    },
  ],
};
