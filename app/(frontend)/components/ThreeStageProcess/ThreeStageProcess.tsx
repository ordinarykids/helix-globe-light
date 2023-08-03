'use client'

import { useState } from 'react'
import cx from 'classnames'
import Stage, { StageField } from './Stage/Stage'
import ArrowRight from '../svgs/ArrowRight'
import styles from './ThreeStageProcess.module.scss'

export interface ThreeStageProcessProps {
  header?: string
  stages: StageField[]
}

export interface ThreeStageProcessField extends ThreeStageProcessProps {
  _key: string
  _type: 'threeStageProcess'
}

export default function ThreeStageProcess({ header, stages }: ThreeStageProcessProps) {
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
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.titleGraphic}>
          {stages.map((stage, index) => (
            <div className={styles.titleGraphic_TitleWrap} key={stage._key}>
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
              </button>
              {index < 2 && (
                <div className={styles.titleGraphic_Arrow}>
                  <ArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.stages}>
        {stages.map((stage, index) => <Stage {...stage} key={stage._key} active={index === activeStage} />)}
      </div>
    </section>
  )
}
