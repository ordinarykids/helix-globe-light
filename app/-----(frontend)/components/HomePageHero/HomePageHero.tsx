import cx from 'classnames'
import React from 'react'
import Image from 'next/image'
import type { PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'
import type ImageField from 'app/(frontend)/types/image'
import type LinkField from 'app/(frontend)/types/link'
import Button from '../Button/Button'
import styles from './HomePageHero.module.scss'

//import  InteractiveSphere  from '../InteractiveSphere4/InteractiveSphere'

export type HomePageHeroType = {
    header?: string | null,
    subheader?: PortableTextBlock[],
    media?: string | null,
    buttonText?: string | null,
    buttonLink?: LinkField,
    image: ImageField,
  }



export default function HomePageHero({
  header, subheader, media, buttonText, buttonLink, image,
}: HomePageHeroType) {
  return (
    <div className={cx(styles.wrap)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.heroLeft)}>
          {header && <h1 className={cx(styles.heroHeader)}>{header}</h1>}
          {subheader && (
            <div className={cx(styles.heroSubheader)}>
              <PortableText value={subheader} />
            </div>
          )}
          {(buttonText && buttonLink) && (
            <div className={cx(styles.link)}>
              <Button
                text={buttonText}
                link={`${buttonLink.link || buttonLink.externalUrl}`}
              />
            </div>
          )}
        </div>
        <div className={cx(styles.heroRight)}>
         
        </div>
      </div>
    </div>
  )
}