'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RemoveScroll } from 'react-remove-scroll'
import debounce from 'lodash.debounce'
import cx from 'classnames'
import type { MainNavigation, MainNavCTALink } from 'app/(frontend)/lib/sanity/fetch/fetchMainNav'
import useIsBelowBreakpoint from 'app/(frontend)/hooks/useIsBelowBreakpoint'
import StyledLink from '../StyledLink'
import ArrowDropdown from '../svgs/ArrowDropdown'
import styles from './MainNav.module.scss'

type teaserDocTypes = | 'blogPost'

export default function MainNav({ navData }: { navData: MainNavigation }) {
  const pathname = usePathname()
  const [isBelowBreakpoint] = useIsBelowBreakpoint('992px')
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null)
  const [hoveredSubmenuIndex, setHoveredSubmenuIndex] = useState<number | null>(null)
  const [headerBottomPos, setHeaderBottomPos] = useState<number | null>(120)

  useEffect(() => {
    setOpenSubmenuIndex(null)
    setMobileNavIsOpen(false)
  }, [pathname])

  const toggleSubmenuOpen = (index: number) => {
    setOpenSubmenuIndex((prev) => {
      if (prev === index) {
        return null
      }
      return index
    })
  }

  const getHeaderBottomPos = useCallback(() => {
    const headerRect = document.getElementById('siteHeader')?.getBoundingClientRect()
    if (headerRect) {
      const { y, height } = headerRect
      setHeaderBottomPos(y + height)
    }
  }, [])

  const toggleMobileNav = () => {
    if (!mobileNavIsOpen) {
      getHeaderBottomPos()
    }
    setMobileNavIsOpen((prev) => !prev)
  }

  // Update headerBottomPos on window resize in case user widens to desktop nav, scrolls, then narrows to mobile nav
  useEffect(() => {
    const getHeaderBottomPosDebounced = debounce(getHeaderBottomPos, 400)
    window.addEventListener('resize', getHeaderBottomPosDebounced)
    return () => window.removeEventListener('resize', getHeaderBottomPosDebounced)
  }, [getHeaderBottomPos])

  const getCTALink = (ctaLink: MainNavCTALink, desktop = true) => {
    if (ctaLink?.title && (ctaLink?.url?.link || ctaLink?.url?.externalUrl)) {
      return (
        <div
          className={cx(
            styles.ctaLink,
            {
              [styles.ctaLink__hideMobile]: desktop,
              [styles.ctaLink__hideDesktop]: !desktop,
            },
          )}
        >
          <StyledLink text={ctaLink.title} link={`${ctaLink.url.link || ctaLink.url.externalUrl}`} />
        </div>
      )
    }
    return null
  }

  const docTypes = {
    blogPost: {
      text: 'Blog',
      slug: '/blog',
    },
  }

  return (
    <>
      <button
        className={cx(styles.mobileToggle, { [styles.mobileToggle__open]: mobileNavIsOpen })}
        onClick={toggleMobileNav}
        type='button'
        aria-label='Toggle main navigation'
        aria-controls='mainNav'
        aria-expanded={mobileNavIsOpen}
      >
        <span className={cx(styles.mobileToggle_Bar, { [styles.mobileToggle_Bar__open]: mobileNavIsOpen })} />
        <span className={cx(styles.mobileToggle_Bar, { [styles.mobileToggle_Bar__open]: mobileNavIsOpen })} />
        <span className={cx(styles.mobileToggle_Bar, { [styles.mobileToggle_Bar__open]: mobileNavIsOpen })} />
      </button>
      <RemoveScroll forwardProps enabled={mobileNavIsOpen && isBelowBreakpoint}>
        <nav
          className={cx(styles.nav, { [styles.nav__mobileOpen]: mobileNavIsOpen, [styles.nav__isMobile]: isBelowBreakpoint }, 'scroll')}
          id='mainNav'
          aria-label='Main menu'
          style={{ top: `${headerBottomPos}px` }}
        >
          {navData && (
            <ul className={styles.navList}>
              {navData?.navigationSections?.map((section, sectionIndex) => {
                const {
                  navigationLinkGroups,
                  teaser,
                  hideTeaserDesktop,
                  hideTeaserMobile,
                  ctaLink,
                } = section.navigationSectionPanel
                const sectionTitleSplit = section.title.split(' ')
                return (
                  <li key={section._key} className={styles.menuItem}>
                    <button
                      className={cx(
                        styles.menuItem_Button,
                        {
                          [styles.menuItem_Button__faded]:
                            ((hoveredSubmenuIndex !== null && hoveredSubmenuIndex !== sectionIndex)
                            || (openSubmenuIndex !== null && openSubmenuIndex !== sectionIndex))
                            && hoveredSubmenuIndex !== sectionIndex && openSubmenuIndex !== sectionIndex,
                        },
                      )}
                      type='button'
                      onClick={() => toggleSubmenuOpen(sectionIndex)}
                      onMouseEnter={() => setHoveredSubmenuIndex(sectionIndex)}
                      onMouseLeave={() => setHoveredSubmenuIndex(null)}
                      aria-expanded={openSubmenuIndex === sectionIndex}
                      aria-controls={`submenu-${sectionIndex}`}
                    >
                      {sectionTitleSplit.map((word, titleWordIndex) => (
                        sectionTitleSplit.length === titleWordIndex + 1
                          ? (
                            <span key={word} className={styles.menuItem_TitleEnd}>
                              {word}
                              <span
                                className={cx(
                                  styles.menuItem_ButtonArrow,
                                  styles.menuItem_ButtonArrow__hideMobile,
                                  { [styles.menuItem_ButtonArrow__open]: openSubmenuIndex === sectionIndex },
                                )}
                              >
                                <ArrowDropdown />
                              </span>
                            </span>
                          )
                          : `${word} `
                      ))}
                      <span
                        className={cx(
                          styles.menuItem_ButtonArrow,
                          styles.menuItem_ButtonArrow__hideDesktop,
                          { [styles.menuItem_ButtonArrow__open]: openSubmenuIndex === sectionIndex },
                        )}
                      >
                        <ArrowDropdown />
                      </span>
                    </button>
                    <div
                      id={`submenu-${sectionIndex}`}
                      className={cx(
                        styles.submenu,
                        {
                          [styles.submenu__open]: openSubmenuIndex === sectionIndex,
                          [styles.submenu__taller]: navigationLinkGroups.length > 1,
                        },
                      )}
                    >
                      <div className={styles.submenuMainContent}>
                        <div
                          className={cx(
                            styles.submenus,
                            { [styles.submenus__oneCol]: navigationLinkGroups.length === 1 },
                            { [styles.submenus__twoCol]: navigationLinkGroups.length === 2 },
                            {
                              [styles.submenus__threeCol]: navigationLinkGroups.length === 3
                                || (
                                  navigationLinkGroups.length > 3
                                  && teaser
                                  && !hideTeaserDesktop
                                ),
                            },
                            {
                              [styles.submenus__oneColWithTeaser]: (
                                navigationLinkGroups.length === 1
                                && teaser
                                && !hideTeaserDesktop
                              ),
                            },
                          )}
                        >
                          {navigationLinkGroups.map((linkGroup) => (
                            <ul key={linkGroup._key} className={styles.linkGroup}>
                              {linkGroup.title && (
                                <li className={styles.linkGroupHeader}>
                                  {linkGroup.titlelink ? (
                                    <Link
                                      href={`${linkGroup.titlelink.link || linkGroup.titlelink.externalUrl}`}
                                      className={styles.linkGroupHeader_Link}
                                    >
                                      {linkGroup.title}
                                    </Link>
                                  ) : (
                                    linkGroup.title
                                  )}
                                </li>
                              )}
                              {linkGroup.navigationLinks.map((link) => (
                                <li
                                  key={link._key}
                                  className={cx(
                                    styles.linkGroupItem,
                                    { [styles.linkGroupItem__hasHeader]: linkGroup.title },
                                  )}
                                >
                                  <Link
                                    href={`${link.url.link || link.url.externalUrl}`}
                                    className={cx(
                                      styles.submenuLink,
                                      { [styles.submenuLink__hasHeader]: linkGroup.title },
                                    )}
                                  >
                                    {link.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                        {getCTALink(ctaLink, false)}
                        {teaser && (
                          <div
                            className={cx(
                              styles.teaser,
                              {
                                [styles.teaser__hideDesktop]: hideTeaserDesktop,
                                [styles.teaser__hideMobile]: hideTeaserMobile,
                              },
                            )}
                          >
                            {teaser.image && (
                              <div className={styles.teaser_ImageWrap}>
                                <Image
                                  className={styles.teaser_Image}
                                  src={teaser.image.url}
                                  width={teaser.image.width}
                                  height={teaser.image.height}
                                  alt={teaser.image.altText ?? ''}
                                  title={teaser.image.title ?? undefined}
                                />
                              </div>
                            )}
                            <div className={styles.teaser_TextWrap}>
                              <p className={styles.teaser_Type}>
                                {`Featured ${docTypes[teaser._type as teaserDocTypes].text}`}
                              </p>
                              <p className={styles.teaser_Title}>
                                {teaser.title}
                              </p>
                              <StyledLink text='Read More' link={`${docTypes[teaser._type as teaserDocTypes].slug}/${teaser.slug}`} />
                            </div>
                          </div>
                        )}
                      </div>
                      {getCTALink(ctaLink)}
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </nav>
      </RemoveScroll>
    </>
  )
}
