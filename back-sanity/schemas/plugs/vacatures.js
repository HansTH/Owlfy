export default {
  title: 'Vacatures',
  name: 'vacatures',
  type: 'object',
  fields: [
    {
      title: 'Titel',
      name: 'heading',
      description: 'Titel',
      type: 'string',
    },
    {
      title: 'Body',
      name: 'body',
      description: 'Sub Titel',
      type: 'portableText',
    },
    {
      title: 'Vacatures',
      name: 'vacature',
      description: 'Voeg vacatures toe.',
      type: 'array',
      of: [{ type: 'vacature' }],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'mainImage',
    },
  },
};
