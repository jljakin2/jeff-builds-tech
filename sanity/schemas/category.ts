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
      name: 'description',
      title: 'Brief description of category',
      description: 'What is a brief 1-2 sentence description of the category?',
      type: 'text',
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
          name: 'altText',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    },
  ],
}
