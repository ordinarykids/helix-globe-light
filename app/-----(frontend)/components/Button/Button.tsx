import Link from 'next/link'
import cx from 'classnames'
import styles from './Button.module.scss'

export type ButtonProps = {
  text: string,
  link: string,
  className?: string,
  buttonStyle?: 'solid' | 'outline',
  size?: 'large' | 'small',
  theme?: 'dark' | 'light',
  align?: 'center' | 'left',
}

export default function Button({
  text, link, className, buttonStyle = 'solid', size = 'large', align = 'left', theme = 'dark',
}: ButtonProps) {
  const linkClasses = cx(styles.Button, styles[buttonStyle], styles[size], styles[align], styles[theme])

  return (
    <Link href={link} className={cx(linkClasses, className)}>
      <span className={styles.text}>{text}</span>
    </Link>
  )
}
