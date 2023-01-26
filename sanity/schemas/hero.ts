export default {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
    },
    {
      name: 'subheader',
      type: 'string',
      title: 'Subheader',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}
