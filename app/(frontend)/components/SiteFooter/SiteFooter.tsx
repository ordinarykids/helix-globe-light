import Link from 'next/link'
import fetchFooter from 'app/(frontend)/lib/sanity/fetch/fetchFooter'
import BrandLogo from '../svgs/BrandLogo'
import LinkedInLogo from '../svgs/LinkedInLogo'
import TwitterLogo from '../svgs/TwitterLogo'
import FooterNav from '../FooterNav'
import styles from './SiteFooter.module.scss'

export default async function SiteFooter() {
  const footerData = await fetchFooter()
  const { footerNav, footerContent = {} } = footerData
  const footerContentNonNull = footerContent || {}
  const {
    tagline,
    twitterLink,
    linkedInLink,
    contactInfo,
    copyrightStartYear,
    copyrightCompany,
    copyrightDescription,
    legalLinks,
    certifications,
  } = footerContentNonNull

  return (
    <footer className={styles.footer} id='siteFooter'>
      <div className={styles.main}>
        <div className={styles.main_Container}>
          <div className={styles.content}>
            <Link href='/' className={styles.brandLink} aria-label='Helix brand logo'>
              <BrandLogo />
            </Link>
            {tagline && (
              <p className={styles.tagline}>
                {tagline}
              </p>
            )}
            {(twitterLink || linkedInLink || contactInfo) && (
              <div className={styles.contactWrap}>
                {(twitterLink || linkedInLink) && (
                  <div className={styles.socialLinks}>
                    {twitterLink && (
                      <a href={twitterLink} className={styles.socialLink} target='_blank' rel='noopener noreferrer'>
                        <TwitterLogo />
                      </a>
                    )}
                    {linkedInLink && (
                      <a href={linkedInLink} className={styles.socialLink} target='_blank' rel='noopener noreferrer'>
                        <LinkedInLogo />
                      </a>
                    )}
                  </div>
                )}
                {contactInfo && (
                  <div className={styles.contact}>
                    <p className={styles.contact_Intro}>
                      Contact us:
                    </p>
                    <p className={styles.contact_Info}>
                      {contactInfo}
                    </p>
                  </div>
                )}
              </div>
            )}
            <div className={styles.copyrightWrap}>
              <p className={styles.copyright}>
                &copy;&nbsp;
                {copyrightStartYear && `${copyrightStartYear}-`}
                {(new Date().getFullYear())}
                {copyrightCompany && ` ${copyrightCompany}`}
              </p>
              {copyrightDescription && (
                <p className={styles.copyrightDescription}>
                  {copyrightDescription}
                </p>
              )}
            </div>
          </div>
          <div className={styles.nav}>
            <FooterNav navData={footerNav} />
          </div>
        </div>
      </div>
      {(legalLinks || certifications) && (
        <div className={styles.legal}>
          <div className={styles.legal_Container}>
            <div className={styles.legal_Inner}>
              {legalLinks && (
                <ul className={styles.legalLinks}>
                  {legalLinks.map((link) => (
                    <li key={link._key} className={styles.linkItem}>
                      <Link href={`${link.url.link || link.url.externalUrl}`} className={styles.legalLink}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {certifications && (
                <ul className={styles.certifications}>
                  {certifications.map((certification) => (
                    <li key={certification} className={styles.certification}>
                      {certification}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
