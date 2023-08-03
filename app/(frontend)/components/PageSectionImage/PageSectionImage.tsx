import Image from 'next/image'
import ImageField from 'app/(frontend)/types/image'
import styles from './PageSectionImage.module.scss'

export interface PageSectionImageProps {
  image?: ImageField
}

export interface PageSectionImageField extends PageSectionImageProps {
  _key: string
  _type: 'pageSectionImage'
}

export default function PageSectionImage({ image }: PageSectionImageProps) {
  return (
    <section className={styles.container}>
      {image && (
        <div className={styles.imgWrap}>
          <Image
            className={styles.img}
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.altText ?? ''}
            title={image.title ?? undefined}
          />
        </div>
      )}
    </section>
  )
}
