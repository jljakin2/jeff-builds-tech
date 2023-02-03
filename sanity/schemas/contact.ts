export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  icon: () => '✉️',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
      description: 'Header for the contact section',
    },
    {
      name: 'body',
      type: 'array',
      description: 'Main body for the contact section',
      title: 'Contact Body',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Links to socials',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'socialLink'}]}],
    },
  ],
}
