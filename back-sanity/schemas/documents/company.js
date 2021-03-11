export default {
  title: 'Bedrijf',
  name: 'company',
  type: 'document',
  fields: [
    {
      title: 'Bedrijfs Informatie',
      name: 'info',
      type: 'companyInfo',
    },
    {
      title: 'Social Media',
      name: 'socialMediaLinks',
      type: 'array',
      of: [{ type: 'socialMedia' }],
    },
  ],
};
