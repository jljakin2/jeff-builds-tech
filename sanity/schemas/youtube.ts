export const youtube = {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    prepare({url}: {url: string}) {
      return {
        title: 'YouTube video',
        subtitle: url,
      }
    },
  },
}
