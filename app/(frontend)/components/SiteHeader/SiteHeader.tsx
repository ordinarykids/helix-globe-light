import Link from 'next/link'
import fetchMainNav from 'app/(frontend)/lib/sanity/fetch/fetchMainNav'
import BrandLogo from '../svgs/BrandLogo'
import MainNav from '../MainNav'
import ParticipantNav from '../ParticipantNav'
import styles from './SiteHeader.module.scss'

export default async function SiteHeader() {
  const mainNavData = await fetchMainNav()

  return (
    <>
      <ParticipantNav />
      <header className={styles.header} id='siteHeader'>
        <div className={styles.container}>
          <Link href='/' className={styles.brandLink} aria-label='Helix brand logo'>
            <BrandLogo />
          </Link>
          <MainNav navData={mainNavData} />
        </div>
      </header>
    </>
  )
}
