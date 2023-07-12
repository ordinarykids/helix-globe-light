import { Fragment } from 'react'
import styles from './Typography.module.scss'

interface TypographyProps {
  elements: {
    name: string
    fontSize: number
    lineHeight: number
    content: string
    weight: number
    letterSpacing?: number
    usage?: string
  }[]
}

const Typography: React.FC<TypographyProps> = ({ elements }) => {
  const els = elements.map((el) => {
    const renderedContent = { __html: el.content }
    const letterSpacing = el.letterSpacing ? ` | letter-spacing: ${el.letterSpacing}px` : ''
    const usage = el.usage ? ` | ${el.usage}` : ''
    return (
      <Fragment key={el.usage}>
        <small className={styles.eyebrow}>
          {`${el.name} | ${el.fontSize}px/${el.lineHeight}px | weight: ${el.weight}${letterSpacing}${usage}`}
        </small>
        <div dangerouslySetInnerHTML={renderedContent} className={styles.htmlWrapper} />
      </Fragment>
    )
  })
  return (
    <section>
      {els}
    </section>
  )
}

export default Typography
