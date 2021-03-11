export default {
  title: 'Feature',
  name: 'feature',
  type: 'object',
  fields: [
    {
      title: 'Titel',
      name: 'title',
      description: 'Titel van het onderwerp',
      type: 'string',
    },
    {
      title: 'Onderwerp',
      name: 'body',
      description: 'Korte beschrijving over het onderwerp',
      type: 'portableText',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title,
        media: image,
      };
    },
  },
};
