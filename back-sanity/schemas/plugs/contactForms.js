export default {
  title: 'Contact Formulier',
  name: 'contactForms',
  type: 'object',
  fields: [
    {
      title: 'Welk Contact Formulier',
      name: 'kind',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['contact', 'vacature'],
      },
    },
    {
      title: 'Image',
      name: 'image',
      description:
        'Foto voor de achtergrond. LET OP: Houdt rekening met de positie van het formulier op de website.',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      title: 'kind',
    },
    prepare({ title }) {
      return {
        title: `Contact formulier: ${title}`,
      };
    },
  },
};
