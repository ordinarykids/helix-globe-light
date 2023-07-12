import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import fetchBlogPostBySlug from 'app/(frontend)/lib/sanity/fetch/fetchBlogPostBySlug'
import styles from './page.module.scss'

export async function generateMetadata(
  { params }: { params: { slug: string } },
): Promise<Metadata> {
  const { slug } = params
  const blogPost = await fetchBlogPostBySlug(slug)

  if (!blogPost) {
    return {}
  }

  const { title } = blogPost

  return {
    title,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const blogPost = await fetchBlogPostBySlug(slug)

  if (!blogPost) {
    notFound()
  }

  const { title, categories, tags } = blogPost

  return (
    <main className={styles.container}>
      <h1>{title}</h1>
      {categories && (
        <div>
          <div>
            Categories:
            <ul>
              {categories.map((category) => {
                const { slug: categorySlug, name: categoryName } = category
                return categorySlug ? (
                  <li>
                    <Link href={`/blog/category/${categorySlug}`}>
                      {categoryName}
                    </Link>
                  </li>
                ) : null
              })}
            </ul>
          </div>
        </div>
      )}
      {tags && (
        <div>
          <div>
            Tags:
            <ul>
              {tags.map((tag) => {
                const { slug: tagSlug, name: tagName } = tag
                return tagSlug ? (
                  <li>
                    <Link href={`/blog/tag/${tagSlug}`}>
                      {tagName}
                    </Link>
                  </li>
                ) : null
              })}
            </ul>
          </div>
        </div>
      )}
    </main>
  )
}
