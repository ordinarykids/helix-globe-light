import { groq } from 'next-sanity'
import { sanityFetch } from '../sanityClient'

// Using params like $taxonomy in query causes sanity-codegen to mark values as potentially unknown
// So manually writing out the type here
type Term = {
  name: string | null
}

const fetchTerm = async (taxonomy: string, slug: string) => {
  const query = groq`
    *[_type == $taxonomy && slug.current == $slug][0]{
      name,
    }`
  const res = await sanityFetch<Term>(query, { taxonomy, slug })
  return res
}

export default fetchTerm
