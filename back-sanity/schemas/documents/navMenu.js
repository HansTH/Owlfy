export default {
  type: 'document',
  name: 'navigationMenu',
  fields: [
    {
      title: 'Titel Navigatie Menu',
      name: 'title',
      type: 'string',
    },
    {
      type: 'array',
      name: 'items',
      of: [{ type: 'cta' }],
    },
  ],
};
