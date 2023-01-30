export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: '🎟️',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'What is the name of the string?',
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
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    },
  ],
}
