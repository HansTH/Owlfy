export default {
  title: 'Image',
  name: 'mainImage',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      description: 'De eigenaar van de foto.',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      title: 'Alternative text',
      name: 'alt',
      type: 'string',
      description: 'Belangrijk voor SEO en slechtziende personen.',
      validation: (Rule) => Rule.error('Verplicht invullen').required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'caption',
      imageUrl: 'asset.url',
      media: 'mainImage',
    },
  },
};
