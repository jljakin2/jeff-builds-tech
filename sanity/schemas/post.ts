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
      type: 'blockContent',
      description: 'Body of blog post.',
      title: 'Body',
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
          options: {},
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
    {
      name: 'realCreatedDate',
      title: 'Real Created Date',
      description:
        'What was the data you actual wrote the post? This is mostly for the Ship 30 stuff',
      type: 'datetime',
    },
  ],
}
