import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import RichTextType from 'app/(frontend)/types/richText'
import ImageField from 'app/(frontend)/types/image'
import portableTextComponents from 'app/(frontend)/utils/portableTextComponents'
import Icon from 'app/(frontend)/components/Icon'
import type { IconType, IconColor } from 'app/(frontend)/components/Icon/Icon'
import cx from 'classnames'
import styles from './TwoUpStats.module.scss'

type TStatCard = {
  _key: string
  mediaType?: 'icon' | 'image'
  icon?: IconType
  iconColor: IconColor
  image?: ImageField
  statistic: string;
  description?: RichTextType
}

export interface TwoUpStatsProps {
  header?: string
  columns: {
    col1?: TStatCard[] | null
    col2?: TStatCard[] | null
  }
}

export interface TwoUpStatsField extends TwoUpStatsProps {
  _key: string
  _type: 'caseStudyTwoUpStats'
}

export default function TwoUpStats({ header, columns }: TwoUpStatsProps) {
  const { col1, col2 } = columns
  const columnOutput = (col: TStatCard[] | undefined) => (
    col?.map((row: TStatCard) => {
      const {
        _key,
        mediaType,
        icon,
        iconColor,
        image,
        statistic,
        description,
      } = row
      return (
        <div
          key={_key}
          className={cx(
            styles.statCard,
            {
              [styles.statCard__withIcon]: mediaType === 'icon' && icon,
              [styles.statCard__withImage]: mediaType === 'image' && image,
            },
          )}
        >
          {(mediaType === 'icon' && icon) && (
            <div className={styles.statCard_Icon}>
              <Icon icon={icon} color={iconColor} />
            </div>
          )}
          {(mediaType === 'image' && image) && (
            <div className={styles.statCard_Image}>
              <Image
                className={styles.logo}
                src={image.url}
                width={image.width}
                height={image.height}
                alt={image.altText ?? ''}
                title={image.title ?? undefined}
              />
            </div>
          )}
          <div className={styles.statCard_TextWrap}>
            <p className={styles.statCard_Statistic}>{statistic}</p>
            {description && (
              <div className={styles.statCard_Text}>
                <PortableText value={description} components={portableTextComponents()} />
              </div>
            )}
          </div>
        </div>
      )
    })
  )

  return (
    <section className={styles.container}>
      {header && <h5 className={styles.title}>{header}</h5>}
      {(col1 || col2) && (
        <div className={styles.cards}>
          {col1 && (
            <div className={styles.cards_Col}>
              {columnOutput(col1)}
            </div>
          )}
          {col2 && (
            <div className={styles.cards_Col}>
              {columnOutput(col2)}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
