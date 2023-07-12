import type { Metadata } from 'next'
import fetchTermAndPosts from 'app/(frontend)/lib/sanity/fetch/fetchTermAndPosts'
import TaxonomyTermIndex from 'app/(frontend)/components/TaxonomyTermIndex'

export async function generateMetadata(
  { params }: { params: { slug: string } },
): Promise<Metadata> {
  const { slug } = params
  const pageData = await fetchTermAndPosts('tag', slug, 'blogPost', 'tags')

  if (!pageData || !pageData.term) {
    return {}
  }

  const { term } = pageData

  return {
    title: term.name,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  /* @ts-expect-error Async Server Component */
  return <TaxonomyTermIndex taxonomy='tag' postType='blogPost' slug={slug} taxonomyField='tags' />
}
