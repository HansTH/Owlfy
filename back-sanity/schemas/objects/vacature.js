import mainImage from './mainImage';

export default {
  title: 'Vacature',
  name: 'vacature',
  type: 'object',
  fields: [
    {
      title: 'Titel',
      name: 'heading',
      description: 'Titel van de vacature',
      type: 'string',
    },
    {
      title: 'Omschrijving',
      name: 'body',
      description: 'Omschrijving van de vacature',
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
      title: 'heading',
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
