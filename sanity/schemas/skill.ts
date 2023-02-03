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
      description:
        'Only use this skill if it is not tech related. All tech related names will come from the tag relationship.',
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
      name: 'tag',
      title: 'Tag',
      description: 'What tags are related to the skill?',
      type: 'reference',
      to: [{type: 'tag'}],
    },
  ],
  preview: {
    select: {
      name: 'name',
      tag: 'tag.name',
    },
    prepare: ({name, tag}: any) => ({title: tag ? tag : name}),
  },
}
