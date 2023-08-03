import cx from 'classnames'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Icon from '../../Icon'
import type { IconType } from '../../Icon/Icon'
import styles from './Stage.module.scss'

export interface StageProps {
  _key: string
  icon?: IconType
  title: string
  subtitle?: string
  description: PortableTextBlock[]
  active: boolean
}

export interface StageField extends StageProps {
  _type: 'stage'
}

export default function Stage({
  icon,
  title,
  subtitle,
  description,
  _key: key,
  active,
}: StageProps) {
  return (
    <div className={cx(styles.stage, { [styles.stage__active]: active })} id={`stage-${key}`}>
      {icon && (
        <Icon icon={icon} />
      )}
      <h3 className={styles.title}>
        {title}
      </h3>
      {subtitle && (
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      )}
      <section className={styles.description}>
        <PortableText value={description} />
      </section>
    </div>
  )
}
