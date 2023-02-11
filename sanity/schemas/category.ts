export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: () => '✅',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'What is the name of the category?',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'featured',
      title: 'Featured',
      description: 'Do you want to feature this category?',
      type: 'boolean',
      options: {
        layout: 'toggle',
      },
    },
    {
      name: 'posts',
      title: 'Posts',
      description: 'Posts related to the category.',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'post'}]}],
    },
    {
      name: 'image',
      title: 'Category Background Image',
      type: 'image',
      description: 'This is for the background image of the category card.',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
          options: {},
        },
      ],
    },
  ],
}
