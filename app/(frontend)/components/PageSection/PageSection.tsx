import Image from 'next/image'
import cx from 'classnames'
import shapesColoredDots from 'public/shapes_colored_dots.svg'
import PageSectionBgColorType from 'app/(frontend)/types/pageSectionBgColor'
import CardGrid from '../CardGrid'
import { CardGridField } from '../CardGrid/CardGrid'
import RichText from '../RichText'
import { RichTextField } from '../RichText/RichText'
import TwoUp from '../TwoUp'
import { TwoUpField } from '../TwoUp/TwoUp'
import VideoEmbed from '../VideoEmbed'
import { VideoEmbedField } from '../VideoEmbed/VideoEmbed'
import styles from './PageSection.module.scss'

export interface PageSectionProps {
  title?: string
  bgColor: PageSectionBgColorType
  bgImage: 'none' | 'grayShapes'
  innerBlocks: (
    | CardGridField
    | RichTextField
    | TwoUpField
    | VideoEmbedField
  )[]
}

export default function PageSection({
  title,
  bgColor,
  bgImage,
  innerBlocks,
}: PageSectionProps) {
  return (
    <section className={cx(styles.wrap, styles[`wrap__bg${bgColor}`])}>
      <div className={styles.wrapInner}>
        <div className={styles.bgWrap}>
          <div className={styles.bgContainer}>
            {bgImage === 'grayShapes' && (
              <Image src={shapesColoredDots} className={styles.shapesColoredDots} width={1364} height={641} alt='' />
            )}
          </div>
        </div>
        <div className={styles.fgWrap}>
          {title && (
            <div className={styles.titleWrap}>
              <h2 className={styles.title}>
                {title}
              </h2>
            </div>
          )}
          {innerBlocks && innerBlocks.length > 0 && innerBlocks.map((block) => {
            switch (block?._type) {
              case 'cardGrid':
                return <CardGrid key={block._key} {...block} />

              case 'richText':
                return <RichText key={block._key} {...block} sectionBgColor={bgColor} />

              case 'twoUp':
                return <TwoUp key={block._key} {...block} sectionBgColor={bgColor} />

              case 'videoEmbed':
                return <VideoEmbed key={block._key} {...block} />

              default:
                return null
            }
          })}
        </div>
      </div>
    </section>
  )
}
