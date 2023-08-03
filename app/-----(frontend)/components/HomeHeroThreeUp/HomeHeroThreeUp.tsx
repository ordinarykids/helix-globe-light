import React from 'react'
import Image from 'next/image'
import type ImageField from 'app/(frontend)/types/image'
import type LinkField from 'app/(frontend)/types/link'
import Button from '../Button'
import styles from './HomeHeroThreeUp.module.scss'

export type HomeHeroThreeUpType = {
    header?: string | null
    ctas: {
      _key: string
      image: ImageField
      header?: string | null
      buttonText?: string | null
      buttonUrl?: LinkField | null
    }[]
  }

export default function HomeHeroThreeUp({ header, ctas }: HomeHeroThreeUpType) {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {header && <h2 className={styles.header}>{header}</h2>}
          {ctas && (
            <div className={styles.ctas}>
              {ctas.map((cta) => {
                const {
                  _key,
                  image,
                  header: ctaHeader,
                  buttonText,
                  buttonUrl,
                } = cta
                return (
                  <div key={_key} className={styles.cta}>
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
                    {ctaHeader && <h3 className={styles.cta_Title}>{ctaHeader}</h3>}
                    {buttonText && buttonUrl && (
                      <Button className={styles.cta_Button} text={buttonText} link={`${buttonUrl.link || buttonUrl.externalUrl}`} buttonStyle='outline' align='center' />
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
