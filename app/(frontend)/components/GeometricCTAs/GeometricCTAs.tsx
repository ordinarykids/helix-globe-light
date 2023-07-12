import Image, { StaticImageData } from 'next/image'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import cx from 'classnames'
import publicHealthImg from 'public/public_health@2x.png'
import lifeSciencesImg from 'public/life_sciences@2x.png'
import healthSystemsImg from 'public/health_systems@2x.png'
import StyledLink from '../StyledLink'
import Circles from '../svgs/Circles'
import Hexagons from '../svgs/Hexagons'
import Triangles from '../svgs/Triangles'
import styles from './GeometricCTAs.module.scss'

export type GeometricCTAsShapes = 'circle' | 'hexagon' | 'triangle'

export interface GeometricCTAsProps {
  title?: string
  ctas: {
    _key: string
    title?: string
    content?: PortableTextBlock[]
    linkText?: string
    linkUrl?: {
      externalUrl?: string | null
      link?: string | null
    }
    shape: GeometricCTAsShapes
  }[]
}

type ShapeData = {
  [Key in GeometricCTAsShapes]: { // eslint-disable-line no-unused-vars
    shapeComp: JSX.Element
    textAlign: 'left' | 'right'
    imgSrc: StaticImageData
    imgWidth: number
    imgHeight: number
    imgAltText: string
  }
}

export default function GeometricCTAs({ title, ctas }: GeometricCTAsProps) {
  const shapeData: ShapeData = {
    circle: {
      shapeComp: <Circles />,
      textAlign: 'right',
      imgSrc: publicHealthImg,
      imgWidth: 470,
      imgHeight: 446,
      imgAltText: 'Woman holds a clipboard while wearing protective gear including white coverall, surgical mask, face shield, and goggles',
    },
    hexagon: {
      shapeComp: <Hexagons />,
      textAlign: 'left',
      imgSrc: lifeSciencesImg,
      imgWidth: 681,
      imgHeight: 507,
      imgAltText: 'Two women in lab coats and protective eyewear look through a miscroscope',
    },
    triangle: {
      shapeComp: <Triangles />,
      textAlign: 'left',
      imgSrc: healthSystemsImg,
      imgWidth: 659,
      imgHeight: 532,
      imgAltText: 'Man in button-up shirt and tie shows something on a clipboard or tablet to a woman doctor wearing a doctor coat and stethoscope',
    },
  }

  return (
    <section className={cx(styles.wrap, styles[`wrap__${ctas[0].shape}`])}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>
          {title}
        </h2>
      </div>
      {ctas.map((cta) => {
        const {
          _key,
          title: ctaTitle,
          content,
          linkText,
          linkUrl,
          shape,
        } = cta
        return (
          <div key={_key} className={cx(styles.cta, styles[`cta__${shape}`])}>
            <div className={styles.container}>
              <div className={styles.inner}>
                <div className={cx(styles.shape, styles[`shape__${shape}`])}>
                  {shapeData[shape].shapeComp}
                </div>
                {(title || content || (linkText && linkUrl)) && (
                  <div className={cx(styles.textWrap, styles[`textWrap__${shape}`])}>
                    <div
                      className={cx(
                        styles.textBox,
                        styles[`textBox__${shape}`],
                        styles[`textBox__${shapeData[shape].textAlign}`],
                      )}
                    >
                      {title && <h3 className={styles.ctaTitle}>{ctaTitle}</h3>}
                      {content && (
                        <div className={styles.content}>
                          <PortableText value={content} />
                        </div>
                      )}
                      {(linkText && linkUrl) && (
                        <div className={styles.link}>
                          <StyledLink text={linkText} link={`${linkUrl.link || linkUrl.externalUrl}`} />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className={cx(styles.imgWrap, styles[`imgWrap__${shape}`])}>
                <Image
                  className={styles.img}
                  src={shapeData[shape].imgSrc}
                  width={shapeData[shape].imgWidth}
                  height={shapeData[shape].imgHeight}
                  alt={shapeData[shape].imgAltText}
                />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
