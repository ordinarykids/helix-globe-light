import React from 'react'
import { PortableText } from '@portabletext/react'
import RichTextType from 'app/(frontend)/types/richText'
import Icon from '../Icon'
import type { IconType, IconColor } from '../Icon/Icon'
import styles from './WideCards.module.scss'

export type WideCardsProps = {
  cards: {
    _key: string
    icon?: IconType
    iconColor: IconColor
    header?: string | null
    text?: RichTextType
  }[]
}

export interface WideCardsField extends WideCardsProps {
  _key: string
  _type: 'wideCards'
}

export default function WideCards({ cards }: WideCardsProps) {
  return (
    <div className={styles.container}>
      {cards && cards.map((card, index) => {
        const {
          _key,
          icon,
          iconColor,
          header,
          text,
        } = card
        const visualNumber = index + 1
        const number = visualNumber < 10 ? `0${visualNumber}` : visualNumber
        return (
          <div key={_key} className={styles.card}>
            <div className={styles.card_TextWrap}>
              <div className={styles.card_HeaderWrap}>
                <span className={styles.card_Number} style={{ color: iconColor }}>
                  {number}
                </span>
                {header && <h3 className={styles.card_Title}>{header}</h3>}
              </div>
              {text && (
                <div className={styles.card_Text}>
                  <PortableText value={text} />
                </div>
              )}
            </div>
            {icon && (
              <div className={styles.card_Icon}>
                <Icon icon={icon} color={iconColor} />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
