'use client'

import { useState } from 'react'
import cx from 'classnames'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import styles from './AccordionItem.module.scss'

export interface AccordionItemProps {
  _key: string
  title: string
  text: PortableTextBlock[]
}

export interface AccordianItemField extends AccordionItemProps {
  _type: 'item'
}

export default function AccordionItem({ title, text, _key: key }: AccordionItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={styles.item}>
      <h3 className={styles.title}>
        <button
          type='button'
          className={styles.titleButton}
          id={`header-${key}`}
          aria-controls={`panel-${key}`}
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((prevState) => !prevState)}
        >
          {title}
          <div className={cx(styles.plusMinus, { [styles.plusMinus__open]: isExpanded })}>
            <span className={styles.plusMinus__h} />
            <span className={styles.plusMinus__v} />
          </div>
        </button>
      </h3>
      <section
        className={styles.text}
        id={`panel-${key}`}
        aria-labelledby={`header-${key}`}
        hidden={!isExpanded}
      >
        <PortableText value={text} />
      </section>
    </div>
  )
}
