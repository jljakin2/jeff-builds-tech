export default {
  name: 'about',
  type: 'document',
  title: 'About',
  icon: () => '📓',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
      description: 'Header for about item.',
    },
    {
      name: 'subheader',
      type: 'string',
      title: 'Subheader',
      description: 'Subheader for about item.',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The image for the about item.',
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
}
