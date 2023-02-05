export default {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  icon: () => '🦸',
  fields: [
    {
      name: 'greeting',
      type: 'string',
      title: 'Greeting',
      description: 'Greeting for the hero section',
    },
    {
      name: 'body',
      type: 'blockContent',
      description: 'Main header for hero section',
      title: 'Header',
    },
    {
      name: 'socialLinks',
      title: 'Links to socials',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'socialLink'}]}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The image for the hero section',
      options: {
        hotspot: true,
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
