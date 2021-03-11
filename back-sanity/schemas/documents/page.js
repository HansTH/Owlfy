export default {
  title: 'Pagina',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Titel Pagina',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Navigatie menu',
      name: 'navMenu',
      description: 'Welke navigatie menu is zichtbaar.',
      type: 'reference',
      to: [{ type: 'navigationMenu' }],
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    },
    {
      title: 'Pagina Onderdelen',
      name: 'content',
      description: 'Voeg, bewerk of verander de volgorde van onderdelen.',
      type: 'array',
      of: [
        { type: 'aboutUs' },
        { type: 'features' },
        { type: 'contactForms' },
        { type: 'vacatures' },
      ],
    },
  ],
};
