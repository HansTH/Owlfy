export default {
  title: 'Features',
  name: 'features',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      description: 'Titel van  de Features',
      type: 'string',
    },
    {
      title: 'Omschrijving',
      name: 'body',
      description: 'Korte beschrijving over de Features',
      type: 'portableText',
    },
    {
      title: 'Onderwerp',
      name: 'feature',
      description: 'Voeg onderwerpen toe.',
      type: 'array',
      of: [{ type: 'feature' }],
    },
  ],
};
