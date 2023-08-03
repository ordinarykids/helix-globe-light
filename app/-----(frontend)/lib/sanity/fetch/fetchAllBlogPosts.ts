import { codegen, groq } from '@sanity-codegen/client'
import { sanityFetch } from '../sanityClient'

const fetchAllBlogPosts = async () => {
  const query = codegen(
    'AllBlogPosts',
    groq`*[_type == "blogPost"]{
      "slug": slug.current,
      title,
    }`,
  )
  const res = await sanityFetch<Sanity.Default.Query.AllBlogPosts>(query)
  return res
}

export default fetchAllBlogPosts
