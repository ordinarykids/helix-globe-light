import { codegen, groq } from '@sanity-codegen/client'
import { sanityFetch } from '../sanityClient'

const fetchBlogPostBySlug = async (slug: string) => {
  const query = codegen(
    'BlogPost',
    groq`*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      categories[]->{
        name,
        "slug": slug.current,
      },
      tags[]->{
        name,
        "slug": slug.current,
      },
    }`,
  )
  const res = await sanityFetch<Sanity.Default.Query.BlogPost>(query, { slug })
  return res
}

export default fetchBlogPostBySlug
