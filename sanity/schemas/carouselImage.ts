export default {
  name: 'carouselImage',
  type: 'image',
  title: 'Carousel Image',
  description: 'Project screenshot.',
  options: {
    hotspot: true, // <-- Defaults to false
  },
  icon: () => '🎠',
  fields: [
    {
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
      options: {},
    },
  ],
}
