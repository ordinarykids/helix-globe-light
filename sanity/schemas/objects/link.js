export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  codegen: { required: true },
  fields: [
    {
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select pages for navigation',
      type: 'reference',
      options: {
        disableNew: true,
      },
      to: [
        { type: 'page' },
      ],
      hidden: ({ parent, value }) => !value && !!parent?.externalUrl,
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
      hidden: ({ parent, value }) => !value && !!parent?.internalLink,
    },
  ],
}
