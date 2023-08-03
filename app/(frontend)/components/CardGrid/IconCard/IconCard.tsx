import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Icon from '../../Icon'
import type { IconType, IconColor } from '../../Icon/Icon'
import styles from './IconCard.module.scss'

interface IconCardProps {
  icon?: IconType
  iconColor: IconColor
  header?: string
  subheader?: string
  text?: PortableTextBlock[]
}

export interface IconCardField extends IconCardProps {
  _key: string
  _type: 'iconCard'
}

export default function IconCard({
  icon, iconColor, header, subheader, text,
}: IconCardProps) {
  return (
    <div className={styles.wrap}>
      {icon && (
        <Icon icon={icon} color={iconColor} />
      )}
      {header && (
        <h3 className={styles.header}>
          {header}
        </h3>
      )}
      {subheader && (
        <h4 className={styles.subheader}>
          {subheader}
        </h4>
      )}
      {text && (
        <div className={styles.text}>
          <PortableText value={text} />
        </div>
      )}
    </div>
  )
}
