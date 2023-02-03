export default {
  name: 'socialLink',
  type: 'document',
  title: 'Social Link',
  icon: () => '🔗',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'What is the link for?',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
}
