export default {
  name: 'seoFields',
  type: 'object',
  title: 'SEO Fields',
  fields: [
    {
      name: 'focusKeyword',
      title: 'Focus Keyword',
      type: 'string',
      description: 'Set this word or phrase to get a good analysis of your content on the SEO pane.',
    },
    {
      name: 'focusSynonyms',
      title: 'Focus Synonyms',
      type: 'string',
      description: 'A comma delimited list of other focus keywords',
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Use this field to override the title of this content in search results.',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Use this field to create a meta description for SEO.',
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Use this field to use a different url for this content as the canonical source of truth.',
    },
    {
      name: 'openGraphUrl',
      title: 'OpenGraph URL',
      type: 'url',
      description: 'Use this field to use a different url for OpenGraph integrations such as social media shares.',
    },
    {
      name: 'ogDescription',
      title: 'OpenGraph Description',
      type: 'text',
      description: 'Use this field to create a different description than the meta description for social shares.',
    },
    {
      name: 'ogImage',
      title: 'OpenGraph Image',
      type: 'image',
      description: 'Use this field to include an OpenGraph image for e.g. social media shares.',
    },
    {
      name: 'nofollow',
      title: 'nofollow this content',
      type: 'boolean',
      description: 'Use this field to set this content as "nofollow" for search engines.',
    },
    {
      name: 'noindex',
      title: 'noindex this content',
      type: 'boolean',
      description: 'Use this field to ask search engines NOT to index this content.',
    },
  ],
}
