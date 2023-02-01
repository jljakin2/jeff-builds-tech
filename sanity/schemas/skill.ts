export default {
  name: 'skill',
  type: 'document',
  title: 'Skill',
  icon: () => '🔨',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'What is the name of the skill?',
    },
    {
      name: 'level',
      type: 'number',
      title: 'Skill Level',
      description: 'What is your proficiency from 0 - 1?',
    },
    {
      name: 'isTech',
      title: 'Tech Skill?',
      description: 'Is this a tech skill?',
      type: 'boolean',
    },
    {
      name: 'tags',
      title: 'Tags',
      description: 'What tags are related to the skill?',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    },
  ],
}
