export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  icon: () => '📂',
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
      description: 'What is the elevator pitch for the project?',
      type: 'text',
    },
    {
      name: 'body',
      type: 'array',
      description: 'Full description and story of the project.',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
        {
          type: 'code',
          options: {
            withFileName: true,
          },
        },
      ],
    },
    {
      name: 'featured',
      title: 'Featured',
      description: 'Do you want to feature this project?',
      type: 'boolean',
      options: {
        layout: 'toggle',
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      description: 'Are there tags related to the tech used to build this project?',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    },
    {
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'string',
      description: 'Provide the repo link to the project.',
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      type: 'string',
      description: 'Provide the live link to this project.',
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'The image used for any card and header.',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      name: 'carouselImages',
      title: 'Carousel Images',
      description: 'Add any screen shots of the project.',
      type: 'array',
      of: [
        {
          title: 'Carousel Images',
          name: 'carouselImages',
          description: 'Add screenshots of the project.',
          type: 'image',
          options: {
            hotspot: true, // <-- Defaults to false
          },
          fields: [
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution',
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
            },
          ],
        },
      ],
    },
  ],
}
