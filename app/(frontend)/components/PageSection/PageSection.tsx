import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import cx from 'classnames'
import shapesColoredDots from 'public/shapes_colored_dots.svg'
import portableTextComponents from 'app/(frontend)/utils/portableTextComponents'
import PageSectionBgColorType from 'app/(frontend)/types/pageSectionBgColor'
import CardGrid from '../CardGrid'
import { CardGridField } from '../CardGrid/CardGrid'
import PageSectionImage from '../PageSectionImage'
import { PageSectionImageField } from '../PageSectionImage/PageSectionImage'
import RichText from '../RichText'
import { RichTextField } from '../RichText/RichText'
import ThreeUpCardCta from '../ThreeUpCardCta'
import { ThreeUpCardCtaField } from '../ThreeUpCardCta/ThreeUpCardCta'
import ThreeUpIconCard from '../ThreeUpIconCard'
import { ThreeUpIconCardField } from '../ThreeUpIconCard/ThreeUpIconCard'
import TwoUp from '../TwoUp'
import { TwoUpField } from '../TwoUp/TwoUp'
import VideoEmbed from '../VideoEmbed'
import { VideoEmbedField } from '../VideoEmbed/VideoEmbed'
import WideCards from '../WideCards'
import { WideCardsField } from '../WideCards/WideCards'
import styles from './PageSection.module.scss'

export interface PageSectionProps {
  title?: string
  text?: PortableTextBlock[]
  bgColor: PageSectionBgColorType
  bgImage: 'none' | 'grayShapes'
  innerBlocks: (
    | CardGridField
    | PageSectionImageField
    | RichTextField
    | ThreeUpCardCtaField
    | ThreeUpIconCardField
    | TwoUpField
    | VideoEmbedField
    | WideCardsField
  )[]
}

export default function PageSection({
  title,
  text,
  bgColor,
  bgImage,
  innerBlocks,
}: PageSectionProps) {
  const styledLinkTheme = bgColor === 'darkBlue' ? 'light' : 'dark'

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
          {(title || text) && (
            <div className={styles.introWrap}>
              <div className={styles.intro}>
                {title && (
                  <h2 className={styles.title}>
                    {title}
                  </h2>
                )}
                {text && (
                  <div className={styles.text}>
                    <PortableText value={text} components={portableTextComponents(styledLinkTheme)} />
                  </div>
                )}
              </div>
            </div>
          )}
          {innerBlocks && (
            <div className={styles.innerBlocks}>
              {innerBlocks.length > 0 && innerBlocks.map((block) => {
                switch (block?._type) {
                  case 'cardGrid':
                    return <CardGrid key={block._key} {...block} />

                  case 'pageSectionImage':
                    return <PageSectionImage key={block._key} {...block} />

                  case 'richText':
                    return <RichText key={block._key} {...block} sectionBgColor={bgColor} />

                  case 'threeUpCardCta':
                    return <ThreeUpCardCta key={block._key} {...block} />

                  case 'threeUpIconCard':
                    return <ThreeUpIconCard key={block._key} {...block} sectionBgColor={bgColor} />

                  case 'twoUp':
                    return <TwoUp key={block._key} {...block} sectionBgColor={bgColor} />

                  case 'videoEmbed':
                    return <VideoEmbed key={block._key} {...block} />

                  case 'wideCards':
                    return <WideCards key={block._key} {...block} />

                  default:
                    return null
                }
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
