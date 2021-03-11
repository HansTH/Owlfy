export default {
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    {
      title: 'Titel',
      name: 'title',
      description:
        'De SEO titel van de pagina. Deze titel verschijnt in de tab van de browser',
      type: 'string',
    },
    {
      title: 'Omschrijving Pagina',
      name: 'description',
      description: 'Korte beschrijving over de pagina.',
      type: 'text',
      validation: (Rule) =>
        Rule.max(155).warning('Niet meer dan 300 characters'),
    },
    {
      title: 'Trefwoorden',
      name: 'keywords',
      description:
        'SEO trefwoorden. Gebruik een komma (,) tussen de verschillende trefwoorden, maximaal 155 characters.',
      type: 'text',
      validation: (Rule) =>
        Rule.max(155).warning('Niet meer dan 155 characters'),
    },
    {
      title: 'Image',
      description:
        'Facebook aanbevolen image formaat 1200x630 px (will be auto resized)',
      name: 'image',
      type: 'mainImage',
    },
  ],
};
