export default {
  name: 'videoEmbed',
  type: 'object',
  title: 'Video Embed',
  fields: [
    {
      title: 'Video URL',
      name: 'url',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
}
