import React from 'react'
import cx from 'classnames'
import { PortableText } from '@portabletext/react'
import RichTextType from 'app/(frontend)/types/richText'
import PageSectionBgColorType from 'app/(frontend)/types/pageSectionBgColor'
import Icon from '../Icon'
import type { IconType, IconColor } from '../Icon/Icon'
import styles from './ThreeUpIconCard.module.scss'

export type ThreeUpIconCardProps = {
  cards: {
    _key: string
    icon?: IconType
    iconColor: IconColor
    header?: string | null
    text?: RichTextType
  }[]
  sectionBgColor?: PageSectionBgColorType
}

export interface ThreeUpIconCardField extends ThreeUpIconCardProps {
  _key: string
  _type: 'threeUpIconCard'
}

export default function ThreeUpIconCard({ cards, sectionBgColor = 'gray' }: ThreeUpIconCardProps) {
  const lightText = sectionBgColor === 'darkBlue'
  return (
    <div className={styles.container}>
      {cards && cards.map((card) => {
        const {
          _key,
          icon,
          iconColor,
          header,
          text,
        } = card
        return (
          <div key={_key} className={styles.card}>
            {icon && (
              <Icon icon={icon} color={iconColor} />
            )}
            {header && <h3 className={cx(styles.card_Title, { [styles.card_Title__light]: lightText })}>{header}</h3>}
            {text && (
              <div className={cx(styles.card_Text, { [styles.card_Text__light]: lightText })}>
                <PortableText value={text} />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
