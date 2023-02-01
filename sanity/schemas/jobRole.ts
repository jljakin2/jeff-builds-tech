export default {
  name: 'jobRole',
  type: 'document',
  title: 'Job Role',
  icon: () => '💼',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Job Title',
      description: 'What is the job title?',
    },
    {
      name: 'responsibilities',
      title: 'Job Responsibilities',
      description: 'What types of job responsibilities do you want to show off?',
      type: 'array',
      of: [
        {
          title: 'Responsibility',
          name: 'responsibility',
          description: 'Explanation of responsibility.',
          type: 'text',
        },
      ],
    },
    {
      name: 'isTech',
      title: 'Tech Job',
      description: 'Is this a tech job?',
      type: 'boolean',
      options: {
        select: 'toggle',
      },
    },
  ],
}
