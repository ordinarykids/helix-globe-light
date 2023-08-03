import Link from 'next/link'
import cx from 'classnames'
import CaretRight from '../svgs/CaretRight'
import styles from './StyledLink.module.scss'

export interface StyledLinkProps {
  text: string,
  link: string,
  className?: string,
  align?: 'left' | 'center',
  theme?: 'dark' | 'light',
}

export interface StyledLinkField extends StyledLinkProps {
  _key: string
  _type: 'styledLink'
}

export default function StyledLink({
  text, link, className, align = 'left', theme = 'dark',
}: StyledLinkProps) {
  const linkClasses = cx(styles.StyledLink, styles[align], styles[theme])

  return (
    <Link href={link} className={cx(linkClasses, className)}>
      <span className={styles.text}>{text}</span>
      <CaretRight />
    </Link>
  )
}
