import { groq } from 'next-sanity'
import { sanityFetch } from '../sanityClient'

// Using params like $taxonomy in query causes sanity-codegen to mark values as potentially unknown
// So manually writing out the type here
type TermAndPosts = {
  posts: {
    slug: string | null
    title: string | null
  }[]
  term: {
    name: string | null
  }
}

const fetchTermAndPosts = async (taxonomy: string, slug: string, postType: string, taxonomyField: string) => {
  const query = groq`{
    "term": *[_type == $taxonomy && slug.current == $slug][0]{
      name,
    },
    "posts": *[_type == $postType && count((${taxonomyField}[]->slug.current)[@ in [$slug]]) > 0]{
      title,
      "slug": slug.current,
    },
  }`
  const res = await sanityFetch<TermAndPosts>(query, { taxonomy, slug, postType })
  return res
}

export default fetchTermAndPosts
