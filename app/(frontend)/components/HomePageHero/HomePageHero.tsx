import cx from 'classnames'
import type { PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'
import type LinkField from 'app/(frontend)/types/link'
import InteractiveSphere from 'app/(frontend)/components/InteractiveSphere'
import Button from '../Button/Button'
import styles from './HomePageHero.module.scss'

export type HomePageHeroType = {
    header?: string | null,
    subheader?: PortableTextBlock[],
    buttonText?: string | null,
    buttonLink?: LinkField,
  }

export default function HomePageHero({
  header, subheader, buttonText, buttonLink,
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
          <InteractiveSphere />
        </div>
      </div>
    </div>
  )
}
