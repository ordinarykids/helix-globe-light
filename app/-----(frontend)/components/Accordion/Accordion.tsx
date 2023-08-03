import cx from 'classnames'
import AccordionItem, { AccordianItemField } from './AccordionItem/AccordionItem'
import styles from './Accordion.module.scss'

export interface AccordionProps {
  header?: string
  items: AccordianItemField[]
}

export interface AccordionField extends AccordionProps {
  _key: string
  _type: 'accordion'
}

export default function Accordion({
  header,
  items,
}: AccordionProps) {
  const itemsCount = items.length
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        {header && (
          <h2
            className={cx(
              styles.title,
              {
                [styles.title__xshort]: itemsCount === 1,
                [styles.title__short]: itemsCount === 2,
              },
            )}
          >
            {header}
          </h2>
        )}
        <div className={styles.items}>
          {items.map((item) => <AccordionItem {...item} />)}
        </div>
      </div>
    </section>
  )
}
