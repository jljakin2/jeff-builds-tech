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
      name: 'posts',
      title: 'Posts',
      description: 'Posts related to the category.',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'post'}]}],
    },
  ],
}
