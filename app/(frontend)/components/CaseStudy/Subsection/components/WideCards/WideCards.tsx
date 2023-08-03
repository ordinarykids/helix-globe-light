'use client'

import { Fragment, useState } from 'react'
import cx from 'classnames'
import ArrowRight from 'app/(frontend)/components/svgs/ArrowRight'
import type { IconColor } from 'app/(frontend)/components/Icon/Icon'
import Stage, { StageField } from './Stage/Stage'
import styles from './WideCards.module.scss'

export interface WideCardsProps {
  header?: string
  iconColor: IconColor
  stages: StageField[]
}

export interface WideCardsField extends WideCardsProps {
  _key: string
  _type: 'caseStudyWideCards'
}

export default function WideCards({ header, iconColor, stages }: WideCardsProps) {
  const [activeStage, setActiveStage] = useState(0)

  return (
    <section className={styles.wrap}>
      {header && (
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>
            {header}
          </h2>
        </div>
      )}
      <div className={styles.visual}>
        <div className={styles.lineGraphic}>
          <div className={styles.lineGraphic_Line} />
          <div className={styles.lineGraphic_Circles}>
            <div className={styles.lineGraphic_Container}>
              {stages.map((stage, index) => (
                <div className={styles.lineGraphic_CircleWrap} key={stage._key}>
                  <div
                    className={cx(
                      styles.lineGraphic_Circle,
                      { [styles.lineGraphic_Circle__active]: index === activeStage },
                    )}
                    style={{ color: iconColor, ...(index === activeStage && { borderColor: iconColor }) }}
                  >
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.titleGraphic}>
          {stages.map((stage, index) => (
            <Fragment key={stage._key}>
              <div className={styles.titleGraphic_TitleWrap}>
                <button
                  className={cx(
                    styles.titleGraphic_Title,
                    { [styles.titleGraphic_Title__active]: index === activeStage },
                  )}
                  aria-controls={`stage-${stage._key}`}
                  aria-expanded={index === activeStage}
                  onClick={() => setActiveStage(index)}
                  type='button'
                >
                  {stage.title}
                  <div className={styles.titleGraphic_TitleUnderline} style={{ backgroundColor: iconColor }} />
                </button>
              </div>
              {index + 1 < stages.length && (
                <div className={styles.titleGraphic_Arrow}>
                  <ArrowRight />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div className={styles.stages}>
        {stages.map((stage, index) => (
          <Stage {...stage} iconColor={iconColor} key={stage._key} active={index === activeStage} index={index} />
        ))}
      </div>
    </section>
  )
}
