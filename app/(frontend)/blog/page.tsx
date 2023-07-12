import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import fetchAllBlogPosts from 'app/(frontend)/lib/sanity/fetch/fetchAllBlogPosts'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Blog',
}

export default async function Page() {
  const blogPosts = await fetchAllBlogPosts()

  if (!blogPosts) {
    notFound()
  }

  return (
    <main className={styles.container}>
      <h1>Blog</h1>
      {blogPosts.length > 0 ? (
        <ul>
          {blogPosts.map((blogPost) => {
            const { slug, title } = blogPost
            return slug && (
              <li>
                <h2>
                  <Link href={`/blog/${slug}`}>
                    {title}
                  </Link>
                </h2>
              </li>
            )
          })}
        </ul>
      ) : (
        <h2>No blog posts found</h2>
      )}
    </main>
  )
}
