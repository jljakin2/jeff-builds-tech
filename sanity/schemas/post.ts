export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  icon: () => '📄',
  fields: [
    {
      name: 'title',
      title: 'Post Title',
      type: 'string',
      description: 'What is the blog post title?',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'excerpt',
      title: 'Blog Post Excerpt',
      description: 'What is the elevator pitch for the blog post?',
      type: 'text',
    },
    {
      name: 'body',
      type: 'array',
      description: 'Body of blog post.',
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
      description: 'Do you want to feature this post?',
      type: 'boolean',
      options: {
        layout: 'toggle',
      },
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'The image used for any card and header about the post.',
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
      name: 'author',
      title: 'Author',
      description: 'Who is the author of the post?',
      type: 'reference',
      to: [{type: 'author'}],
    },
    {
      name: 'category',
      title: 'Categories',
      description: 'What categories is this blog post related to?',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    },
  ],
}
