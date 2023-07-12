// Note: this assumes that every document that has a slug field
// have it on the `slug` field at the root
const isUniqueAcrossAllDocuments = async (slug, context) => {
  const { document, getClient } = context
  const client = getClient({ apiVersion: process.env.SANITY_STUDIO_API_VERSION || '2023-05-09' })
  const id = document._id.replace(/^drafts\./, '')
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  }
  const query = '!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)'
  const result = await client.fetch(query, params)
  return result
}

export default isUniqueAcrossAllDocuments
