import { PortableText } from '@portabletext/react'
import cx from 'classnames'
import PageSectionBgColorType from 'app/(frontend)/types/pageSectionBgColor'
import portableTextComponents from 'app/(frontend)/utils/portableTextComponents'
import RichTextType from 'app/(frontend)/types/richText'
import styles from './RichText.module.scss'

export interface RichTextProps {
  text?: RichTextType
  sectionBgColor?: PageSectionBgColorType
}

export interface RichTextField extends RichTextProps {
  _key: string
  _type: 'richText'
}

export default function RichText({ text, sectionBgColor = 'gray' }: RichTextProps) {
  const styledLinkTheme = sectionBgColor === 'darkBlue' ? 'light' : 'dark'

  return (
    <section className={cx(styles.container, styles[`container__bg${sectionBgColor}`])}>
      {text && (
        <div className={styles.textWrap}>
          <PortableText value={text} components={portableTextComponents(styledLinkTheme)} />
        </div>
      )}
    </section>
  )
}
