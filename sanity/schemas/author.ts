export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  icon: () => '👤',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'What is the name of the author?',
      type: 'string',
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
      name: 'bio',
      title: 'Author Bio',
      description: 'What is the author bio?',
      type: 'text',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      description: 'Profile picture of the author.',
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
      name: 'posts',
      title: 'Posts',
      description: 'Posts written by an author.',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'post'}]}],
    },
  ],
}
