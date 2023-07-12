import { notFound } from 'next/navigation'
import Link from 'next/link'
import fetchTermAndPosts from 'app/(frontend)/lib/sanity/fetch/fetchTermAndPosts'
import styles from './TaxonomyTermIndex.module.scss'

interface TaxonomyTermIndexProps {
  taxonomy: string
  postType: string
  slug: string
  taxonomyField: string
}

export default async function TaxonomyTermIndex({
  taxonomy,
  postType,
  slug,
  taxonomyField,
}: TaxonomyTermIndexProps) {
  const pageData = await fetchTermAndPosts(taxonomy, slug, postType, taxonomyField)

  if (!pageData || !pageData.term) {
    notFound()
  }

  const { term, posts } = pageData

  return (
    <main className={styles.container}>
      <h1>{term.name}</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => {
            const { slug: postSlug, title } = post
            return postSlug && (
              <li key={postSlug}>
                <Link href={`/blog/${postSlug}`}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
      ) : (
        <h2>No posts found</h2>
      )}
    </main>
  )
}
