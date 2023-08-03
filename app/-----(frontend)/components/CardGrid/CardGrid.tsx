import IconCard from './IconCard'
import type { IconCardField } from './IconCard/IconCard'
import styles from './CardGrid.module.scss'

interface CardGridProps {
  cards: (
    | IconCardField
  )[]
}

export interface CardGridField extends CardGridProps {
  _key: string
  _type: 'cardGrid'
}

export default function CardGrid({ cards }: CardGridProps) {
  return (
    <section className={styles.wrap}>
      {cards.map((card) => {
        const { _key, ...rest } = card
        return <IconCard key={_key} {...rest} />
      })}
    </section>
  )
}
