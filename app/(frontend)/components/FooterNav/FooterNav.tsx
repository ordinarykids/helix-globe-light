'use client'

import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cx from 'classnames'
import type { FooterNavigation } from 'app/(frontend)/lib/sanity/fetch/fetchFooter'
import CaretDropdown from '../svgs/CaretDropdown'
import styles from './FooterNav.module.scss'

export default function FooterNav({ navData }: { navData: FooterNavigation }) {
  const pathname = usePathname()
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null)

  useEffect(() => {
    setOpenSubmenuIndex(null)
  }, [pathname])

  const toggleSubmenuOpen = (index: number) => {
    setOpenSubmenuIndex((prev) => {
      if (prev === index) {
        return null
      }
      return index
    })
  }

  return (
    <nav className={styles.nav} id='footerNav' aria-label='Footer menu'>
      {navData && (
        <div className={styles.navList}>
          {navData?.navigationSections?.map((section, sectionIndex) => {
            const { title, navigationLinks, _key: sectionKey } = section
            return (
              <Fragment key={sectionKey}>
                <div className={styles.section}>
                  <button
                    className={cx(styles.title, styles.title__mobileBtn)}
                    type='button'
                    onClick={() => toggleSubmenuOpen(sectionIndex)}
                    aria-expanded={openSubmenuIndex === sectionIndex}
                    aria-controls={`submenu-${sectionIndex}`}
                  >
                    {title}
                    <span
                      className={cx(
                        styles.title_Arrow,
                        styles.title_Arrow__hideDesktop,
                        { [styles.title_Arrow__open]: openSubmenuIndex === sectionIndex },
                      )}
                    >
                      <CaretDropdown />
                    </span>
                  </button>
                  <h4 className={cx(styles.title, styles.title__desktop)}>
                    {title}
                  </h4>
                  <div
                    id={`submenu-${sectionIndex}`}
                    className={cx(
                      styles.submenu,
                      { [styles.submenu__open]: openSubmenuIndex === sectionIndex },
                    )}
                  >
                    <ul className={styles.links}>
                      {navigationLinks.map((link) => (
                        <li key={link._key} className={styles.linkItem}>
                          <Link href={`${link.url.link || link.url.externalUrl}`} className={styles.link}>
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {sectionIndex % 4 === 3 && <div className={styles.divider} />}
              </Fragment>
            )
          })}
        </div>
      )}
    </nav>
  )
}
