import cx from 'classnames'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Icon from 'app/(frontend)/components/Icon'
import type { IconType, IconColor } from 'app/(frontend)/components/Icon/Icon'
import styles from './Stage.module.scss'

export interface StageProps {
  _key: string
  icon?: IconType
  iconColor: IconColor
  title: string
  description?: PortableTextBlock[]
  index: number
  active: boolean
}

export interface StageField extends StageProps {
  _type: 'stage'
}

export default function Stage({
  icon,
  title,
  iconColor,
  description,
  index,
  _key: key,
  active,
}: StageProps) {
  const visualNumber = index + 1
  const number = visualNumber < 10 ? `0${visualNumber}` : visualNumber
  return (
    <div className={cx(styles.stage, { [styles.stage__active]: active })} id={`stage-${key}`}>
      <div className={styles.stage_TextWrap}>
        <div className={styles.stage_HeaderWrap}>
          <span className={styles.stage_Number} style={{ color: iconColor }}>
            {number}
          </span>
          <h3 className={styles.stage_Title}>{title}</h3>
        </div>
        {description && (
          <div className={styles.stage_Text}>
            <PortableText value={description} />
          </div>
        )}
      </div>
      {icon && (
        <div className={styles.stage_Icon}>
          <Icon icon={icon} color={iconColor} />
        </div>
      )}
    </div>
  )
}
