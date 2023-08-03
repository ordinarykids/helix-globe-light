import Subsection, { SubsectionField } from './Subsection/Subsection'
import styles from './CaseStudy.module.scss'

export interface CaseStudySection {
  _key: string
  eyebrow: string
  header?: string | null
  subsections?: SubsectionField[]
}

export interface CaseStudyProps {
  sections: CaseStudySection[]
}

export interface CaseStudyField extends CaseStudyProps {
  _key: string
  _type: 'caseStudy'
}

const slugify = (string: string) => (
  string.toLowerCase()
    .replace(/\s+/g, '-') // slugify the title using a simple regex
    .slice(0, 200)
)

export default function CaseStudy({ sections }: CaseStudyField) {
  return (
    <article className={styles.wrap}>
      <div className={styles.navWrap}>
        <div className={styles.navContainer}>
          <div className={styles.navInner}>
            <nav className={styles.nav}>
              {sections.map((section) => (
                <a href={`#${slugify(section.eyebrow)}`} className={styles.titleGraphic_TitleWrap} key={section._key}>
                  {section.eyebrow}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.sections}>
        {sections.map((section) => {
          const {
            _key,
            eyebrow,
            header,
            subsections,
          } = section
          return (
            <section key={_key} id={slugify(eyebrow)} className={styles.section}>
              <div className={styles.section_Intro}>
                <h3 className={styles.section_Eyebrow}>{eyebrow}</h3>
                <h2 className={styles.section_Header}>{header}</h2>
              </div>
              {subsections && (
                <div className={styles.subsections}>
                  {subsections.map((subsection) => <Subsection {...subsection} key={subsection._key} />)}
                </div>
              )}
            </section>
          )
        })}
      </div>
    </article>
  )
}
