import Image from 'next/image'
import cx from 'classnames'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import globe from 'public/globe.svg'
import Quotation from '../svgs/Quotation'
import styles from './Quote.module.scss'

export interface QuoteProps {
  quote: PortableTextBlock[]
  attribution?: string
  title?: string
  bgImage: 'globe' | 'none'
}

export interface QuoteField extends QuoteProps {
  _key: string
  _type: 'quote'
}

export default function Quote({
  quote,
  attribution,
  title,
  bgImage,
}: QuoteProps) {
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        {bgImage === 'globe' && (
          <Image src={globe} className={cx(styles.bgImg, styles.bgImg__globe)} width={570} height={563} alt='' />
        )}
        <figure className={styles.textWrap}>
          <div className={styles.quoteWrap}>
            <div className={styles.quotationMark}>
              <Quotation />
            </div>
            <div>
              <blockquote className={styles.quote}>
                <PortableText value={quote} />
              </blockquote>
              {(attribution || title) && (
                <figcaption className={styles.figcaption}>
                  {attribution && <p className={styles.attribution}>{attribution}</p>}
                  {title && <p className={styles.title}>{title}</p>}
                </figcaption>
              )}
            </div>
          </div>
        </figure>
      </div>
    </section>
  )
}
