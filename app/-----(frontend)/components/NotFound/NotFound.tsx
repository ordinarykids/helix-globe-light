import styles from './NotFound.module.scss'

export default function NotFound() {
  return (
    <main className={styles.container}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </main>
  )
}
