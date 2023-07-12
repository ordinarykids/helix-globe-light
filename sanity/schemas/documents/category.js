import { SchemaIcon } from '@sanity/icons'
import isUniqueAcrossAllDocuments from '../../lib/isUniqueAcrossAllDocuments'

// https://maxkarlsson.dev/blog/how-to-make-hierarchical-slugs-in-sanity
async function asyncSlugifier(input, type, context) {
  const { getClient } = context
  const client = getClient({
    apiVersion: process.env.SANITY_STUDIO_API_VERSION || '2023-05-09',
  })
  const parentQuery = '*[_id == $id][0]'
  const parentQueryParams = {
    // eslint-disable-next-line no-underscore-dangle
    id: input.doc.parent?._ref || '',
  }
  const parent = await client.fetch(
    parentQuery,
    parentQueryParams,
  )
  const parentSlug = parent?.slug?.current ? `${parent.slug.current}/` : ''
  const pageSlug = input.doc.name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .slice(0, 200)
  return `${parentSlug}${pageSlug}`
}

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: SchemaIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'parent',
      type: 'reference',
      title: 'Parent Category',
      description: 'Optional: Choose a parent category or create a new parent category',
      to: [{ type: 'category' }],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (doc, options) => ({ doc, options }),
        isUnique: isUniqueAcrossAllDocuments,
        slugify: asyncSlugifier,
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
