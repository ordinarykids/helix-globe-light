import type { IconColor } from '../../Icon/Icon'
import TwoUp, { TwoUpField } from './components/TwoUp/TwoUp'
import TwoUpStats, { TwoUpStatsField } from './components/TwoUpStats/TwoUpStats'
import WideCards, { WideCardsField } from './components/WideCards/WideCards'
import styles from './Subsection.module.scss'

export interface SubsectionProps {
  eyebrow?: string
  iconColor: IconColor
  innerBlocks?: (
    | TwoUpField
    | TwoUpStatsField
    | WideCardsField
  )[]
}

export interface SubsectionField extends SubsectionProps {
  _key: string
  _type: 'subsection'
}

export default function Subsection({ eyebrow, iconColor, innerBlocks }: SubsectionProps) {
  return (
    <section className={styles.subsection}>
      <div className={styles.container}>
        <div className={styles.subsectionInner}>
          {eyebrow && (
            <div className={styles.eyebrow}>
              <div className={styles.eyebrow_Decorator} style={{ backgroundColor: iconColor }} />
              <h4 className={styles.eyebrow_Text}>
                {eyebrow}
              </h4>
            </div>
          )}
          {innerBlocks && innerBlocks.length > 0 && innerBlocks.map((block) => {
            switch (block?._type) {
              case 'caseStudyTwoUp':
                return <TwoUp key={block._key} {...block} />

              case 'caseStudyTwoUpStats':
                return <TwoUpStats key={block._key} {...block} />

              case 'caseStudyWideCards':
                return <WideCards key={block._key} {...block} />

              default:
                return null
            }
          })}
        </div>
      </div>
    </section>
  )
}
