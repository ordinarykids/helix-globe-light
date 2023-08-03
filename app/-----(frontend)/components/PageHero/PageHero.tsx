import cx from 'classnames'
import React from 'react'
import Image from 'next/image'
import type { PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'
import type ImageField from 'app/(frontend)/types/image'
import type LinkField from 'app/(frontend)/types/link'
import Button from '../Button/Button'
import styles from './PageHero.module.scss'

export type PageHeroType = {
    eyebrow?: string | null,
    header?: string | null,
    subheader?: PortableTextBlock[],
    buttonText?: string | null,
    buttonLink?: LinkField,
    image: ImageField,
    simpleHeader?: boolean | null
  }

export default function PageHero({
  eyebrow, header, subheader, buttonText, buttonLink, image, simpleHeader = false,
}: PageHeroType) {
  return (
    <div className={cx(styles.wrap, { [styles.wrap__simple]: simpleHeader })}>
      <div className={styles.container}>
        {simpleHeader ? (
          header && (
            <div className={styles.simpleHeader}>
              <h1 className={cx(styles.header, { [styles.header__simple]: simpleHeader })}>{header}</h1>
            </div>
          )
        ) : (
          <>
            <div className={cx(styles.imageWrap)}>
              {image && (
                <Image
                  className={styles.image}
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={image.altText ?? ''}
                  title={image.title ?? undefined}
                />
              )}
            </div>
            <div className={cx(styles.textWrap)}>
              {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
              {header && <h1 className={styles.header}>{header}</h1>}
              {subheader && (
                <div className={cx(styles.subheader)}>
                  <PortableText value={subheader} />
                </div>
              )}
              {(buttonText && buttonLink) && (
                <Button
                  text={buttonText}
                  link={`${buttonLink.link || buttonLink.externalUrl}`}
                  size='small'
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
