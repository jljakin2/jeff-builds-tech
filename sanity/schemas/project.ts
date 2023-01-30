export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  icon: '📂',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: 'What is the project name?',
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
      name: 'excerpt',
      title: 'Project Excerpt',
      type: 'text',
      description: 'What is the elevator pitch for the project?',
    },
  ],
}
