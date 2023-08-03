import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import RichTextType from 'app/(frontend)/types/richText'
import ImageField from 'app/(frontend)/types/image'
import PageSectionBgColorType from 'app/(frontend)/types/pageSectionBgColor'
import portableTextComponents from 'app/(frontend)/utils/portableTextComponents'
import cx from 'classnames'
import styles from './TwoUp.module.scss'

export interface TwoUpProps {
  image?: ImageField
  title?: string
  text?: RichTextType
  imageAlignment: 'left' | 'right'
  imagePaddingOverride?: number
  sectionBgColor?: PageSectionBgColorType
}

export interface TwoUpField extends TwoUpProps {
  _key: string
  _type: 'twoUp'
}

export default function TwoUp({
  image,
  title,
  text,
  imageAlignment,
  imagePaddingOverride,
  sectionBgColor = 'gray',
}: TwoUpProps) {
  const styledLinkTheme = sectionBgColor === 'darkBlue' ? 'light' : 'dark'

  return (
    <section className={cx(styles.container, styles[`container__bg${sectionBgColor}`])}>
      {image && (
        <div
          className={cx(styles.imgWrap, styles[`imgWrap__${imageAlignment}`])}
          style={{ padding: imagePaddingOverride !== undefined ? `${imagePaddingOverride}%` : undefined }}
        >
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
      {text && (
        <div className={styles.textWrap}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <PortableText value={text} components={portableTextComponents(styledLinkTheme)} />
        </div>
      )}
    </section>
  )
}
