import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import RichTextType from 'app/(frontend)/types/richText'
import ImageField from 'app/(frontend)/types/image'
import portableTextComponents from 'app/(frontend)/utils/portableTextComponents'
import Icon from 'app/(frontend)/components/Icon'
import type { IconType, IconColor } from 'app/(frontend)/components/Icon/Icon'
import cx from 'classnames'
import styles from './TwoUp.module.scss'

export interface TwoUpProps {
  image?: ImageField
  iconCard?: {
    rows?: {
      _key: string
      _type: 'row'
      text?: string
      icon?: IconType
      iconColor: IconColor
    }[]
  }
  logos?: {
    _key: string
    _type: 'linkedLogo'
    image: NonNullable<ImageField>
    externalUrl?: string
  }[] | null
  title?: string
  text?: RichTextType
  imageAlignment: 'left' | 'right'
  styleAsCard?: boolean
}

export interface TwoUpField extends TwoUpProps {
  _key: string
  _type: 'caseStudyTwoUp'
}

export default function TwoUp({
  image,
  iconCard,
  logos,
  title,
  text,
  imageAlignment,
  styleAsCard,
}: TwoUpProps) {
  const twoUpMarkup = (
    <section className={cx(styles.container, { [styles.container__inCard]: styleAsCard })}>
      {(text || title || logos) && (
        <div
          className={cx(
            styles.textWrap,
            styles[`textWrap__img${imageAlignment}`],
            { [styles.textWrap__inCard]: styleAsCard },
          )}
        >
          {logos && (
            <div className={cx(styles.logos, { [styles.logos__inCard]: styleAsCard })}>
              {logos.map((logo) => {
                const { _key, image: logoImage, externalUrl } = logo
                const logoImageEl = (
                  <Image
                    className={styles.logo}
                    src={logoImage.url}
                    width={logoImage.width}
                    height={logoImage.height}
                    alt={logoImage.altText ?? ''}
                    title={logoImage.title ?? undefined}
                  />
                )
                return (
                  <div key={_key} className={styles.logoWrap}>
                    {externalUrl ? (
                      <a href={externalUrl} className={styles.logoInner}>
                        {logoImageEl}
                      </a>
                    ) : (
                      <div className={styles.logoInner}>
                        {logoImageEl}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
          {(text || title) && (
            <div className={styles.titleTextWrap}>
              {title && <h1 className={styles.title}>{title}</h1>}
              {text && (
                <div className={styles.text}>
                  <PortableText value={text} components={portableTextComponents()} />
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {(image || iconCard) && (
        <div
          className={cx(
            styles.visuals,
            styles[`visuals__${imageAlignment}`],
            { [styles.visuals__inCard]: styleAsCard },
          )}
        >
          {image && (
            <div className={styles.imgWrap}>
              <Image
                className={styles.img}
                src={image.url}
                width={image.width}
                height={image.height}
                alt={image.altText ?? ''}
                title={image.title ?? undefined}
              />
            </div>
          )}
          {iconCard && (
            <div className={styles.iconCard}>
              {iconCard.rows?.map((row) => {
                const {
                  _key,
                  text: iconRowText,
                  icon,
                  iconColor,
                } = row
                return (
                  <div key={_key} className={styles.iconCard_Row}>
                    {icon && (
                      <div className={styles.iconCard_Icon}>
                        <Icon icon={icon} color={iconColor} />
                      </div>
                    )}
                    {iconRowText && <p className={styles.iconCard_Text}>{iconRowText}</p>}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}
    </section>
  )
  return (
    styleAsCard ? (
      <div className={styles.cardContainer}>{twoUpMarkup}</div>
    ) : twoUpMarkup
  )
}
