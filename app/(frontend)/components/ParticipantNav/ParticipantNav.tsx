import Link from 'next/link'
import cx from 'classnames'
import styles from './ParticipantNav.module.scss'

export default function ParticipantNav() {
  return (
    <div className={styles.wrap}>
      <nav aria-label='Account nav' className={styles.container}>
        <ul className={styles.navList}>
          <li className={styles.signUp}>
            <span className={styles.signUp_Intro}>
              Don&apos;t have an account?&nbsp;
            </span>
            <Link href='https://registration.helix.com' className={cx(styles.link, styles.signUp_Link)}>
              Get Started
            </Link>
          </li>
          <li>
            <Link href='https://registration.helix.com/login' className={cx(styles.link, styles.link__light)}>
              Sign in
            </Link>
          </li>
          <li>
            <Link href='https://support.helix.com/s/' className={cx(styles.link, styles.link__light)}>
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
