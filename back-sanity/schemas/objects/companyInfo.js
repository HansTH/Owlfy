export default {
  name: 'companyInfo',
  type: 'object',
  fields: [
    {
      title: 'Bedrijfsnaam',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Woonplaats',
      name: 'city',
      type: 'string',
    },
    {
      title: 'Telefoon Nummer',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Logo',
      name: 'image',
      type: 'mainImage',
    },
  ],
};
