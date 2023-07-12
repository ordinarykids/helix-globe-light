import { DocumentIcon } from '@sanity/icons'
import isUniqueAcrossAllDocuments from '../../lib/isUniqueAcrossAllDocuments'

// https://maxkarlsson.dev/blog/how-to-make-hierarchical-slugs-in-sanity
async function asyncSlugifier(input, type, context) {
  const { getClient } = context
  const client = getClient({
    apiVersion: process.env.SANITY_STUDIO_API_VERSION || '2023-05-09',
  })
  const parentQuery = '*[_id == $id][0]'
  const parentQueryParams = {
    id: input.doc.parent?._ref || '', // eslint-disable-line no-underscore-dangle
  }
  const parent = await client.fetch(
    parentQuery,
    parentQueryParams,
  )
  const parentSlug = parent?.slug?.current ? `${parent.slug.current}/` : '' // if there's no parent assign an empty string, it will make the function return the current slug as the root
  const pageSlug = input.doc.title
    .toLowerCase()
    .replace(/\s+/g, '-') // slugify the title using a simple regex
    .slice(0, 200)
  return `${parentSlug}${pageSlug}`
}

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: DocumentIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'parent',
      type: 'reference',
      to: [
        {
          type: 'page',
        },
      ],
      options: {
        disableNew: true,
      },
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug/Path',
      description: 'Include entire path to page if this is a child page. E.g., "parent-page/child-page"',
      options: {
        source: (doc, options) => ({ doc, options }),
        isUnique: isUniqueAcrossAllDocuments,
        slugify: asyncSlugifier,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero',
      type: 'homePageHero',
      title: 'Hero',
      hidden: ({ document }) => (document.slug?.current !== 'home'),
    },
    {
      name: 'homeHeroThreeUp',
      type: 'homeHeroThreeUp',
      title: 'Hero 3-Up',
      hidden: ({ document }) => (document.slug?.current !== 'home'),
    },
    {
      name: 'pageHero',
      type: 'pageHero',
      title: 'Hero',
      hidden: ({ document }) => (document.slug?.current === 'home'),
    },
    {
      name: 'pageBuilder',
      type: 'pageBuilder',
      title: 'Page Builder',
    },
  ],
}
