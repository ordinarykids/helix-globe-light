import React from 'react'
import Image from 'next/image'
import type TeaserType from 'app/(frontend)/types/teaser'
import docTypeInfo from 'app/(frontend)/utils/docTypeInfo'
import DocTypes from 'app/(frontend)/types/docTypes'
import Button from '../Button'
import styles from './ThreeUpCardCta.module.scss'

interface ThreeUpCardCtaType extends TeaserType {
  _key: string
}

interface ThreeUpCardCtaProps {
  ctas: ThreeUpCardCtaType[]
}

export interface ThreeUpCardCtaField extends ThreeUpCardCtaProps {
  _key: string
  _type: 'threeUpCardCta'
}

export default function ThreeUpCardCta({ ctas }: ThreeUpCardCtaProps) {
  return (
    <div className={styles.container}>
      {ctas && ctas.map((cta) => {
        const {
          _key,
          _type,
          image,
          title,
          slug,
        } = cta
        return (
          <div key={_key} className={styles.cta}>
            <div className={styles.cta_ImageWrap}>
              {image && (
                <Image
                  className={styles.cta_Image}
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={image.altText ?? ''}
                  title={image.title ?? undefined}
                />
              )}
            </div>
            <p className={styles.cta_Type}>
              {docTypeInfo[_type as DocTypes].text}
            </p>
            {title && <h3 className={styles.cta_Title}>{title}</h3>}
            <Button className={styles.cta_Button} text={docTypeInfo[_type as DocTypes].buttonText} link={`${docTypeInfo[_type as DocTypes].slug}/${slug}`} buttonStyle='outline' align='center' />
          </div>
        )
      })}
    </div>
  )
}
