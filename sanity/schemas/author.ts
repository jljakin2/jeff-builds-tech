export default {
  name: 'tag',
  type: 'document',
  title: 'Tag',
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
