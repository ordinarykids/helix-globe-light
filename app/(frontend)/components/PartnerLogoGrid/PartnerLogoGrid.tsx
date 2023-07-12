import cx from 'classnames'
import type ImageField from 'app/(frontend)/types/image'
import Image from 'next/image'
import Link from 'next/link'
import styles from './PartnerLogoGrid.module.scss'

export interface PartnerLogoGridProps {
  header?: string,
  subheader?: string,
  logos?: {
    image: ImageField,
    external?: string | null,
    fileUrl?: string | null,
  }[]
}

export default function PartnerLogoGrid({ header, subheader, logos }: PartnerLogoGridProps) {
  return (
    <section className={cx(styles.wrap)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.titleWrap)}>
          {header && (
            <h2 className={(cx(styles.header))}>{header}</h2>
          )}
          {subheader && (
            <p className={(cx(styles.subheader))}>{subheader}</p>
          )}
        </div>
        {logos && (
          <div className={cx(styles.logoGrid)}>
            {logos.map((logo) => {
              const {
                image,
                external,
                fileUrl,
              } = logo
              return (
                <Link key={image?.url} href={external || fileUrl || ''} className={cx(styles.logo)}>
                  <div className={styles.logo_Inner}>
                    {image && (
                      <Image
                        className={styles.logo_Image}
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        alt={image.altText ?? ''}
                        title={image.title ?? undefined}
                      />
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
