import React from 'react'
import DashedLineSmallHorizontal from './svgs/DashedLineSmallHorizontal'
import DashedLineSmallVertical from './svgs/DashedLineSmallVertical'
import Circle from './svgs/Circle'
import Diamond from './svgs/Diamond'
import Hexagon from './svgs/Hexagon'
import Triangle from './svgs/Triangle'
import styles from './FourPointChart.module.scss'

export interface FourPointChartProps {
   header: string
  points: {
    _key: string
    title?: string | null
    text?: string | null
  }[]
}

export interface FourPointChartField extends FourPointChartProps {
  _key: string
  _type: 'fourPointChart'
}

const bgSvgs = [
  <Circle />,
  <Hexagon />,
  <Diamond />,
  <Triangle />,
]

export default function FourPointChart({ header, points }: FourPointChartProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {header && <h2 className={styles.header}>{header}</h2>}
          <div className={styles.lines}>
            <DashedLineSmallVertical />
            <DashedLineSmallHorizontal />
            <DashedLineSmallHorizontal />
            <DashedLineSmallVertical />
          </div>
          {points && (
            <div className={styles.points}>
              {points.map((point, index) => {
                const {
                  _key,
                  title,
                  text,
                } = point
                return (
                  <div key={_key} className={styles.point}>
                    <div key={_key} className={styles.point_Inner}>
                      {title && <h3 className={styles.point_Title}>{title}</h3>}
                      {text && <p className={styles.point_Text}>{text}</p>}
                    </div>
                    <div className={styles.point_HoverBg}>
                      {bgSvgs[index]}
                    </div>
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
