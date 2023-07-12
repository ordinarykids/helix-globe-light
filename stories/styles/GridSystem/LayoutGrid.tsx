import React from 'react'
import cx from 'classnames'
import styles from './layoutGrid.module.scss'

const LayoutGrid = ({
  showColumnMixins,
} : {
  showColumnMixins?: boolean,
}) => (
  <main className={styles.main}>
    <div className={styles.column} />
    <div className={styles.column} />
    <div className={styles.column} />
    <div className={styles.column} />
    <div className={cx(styles.column, styles['column-hide-sm'])} />
    <div className={cx(styles.column, styles['column-hide-sm'])} />
    <div className={cx(styles.column, styles['column-hide-sm'])} />
    <div className={cx(styles.column, styles['column-hide-sm'])} />
    <div className={cx(styles.column, styles['column-hide-md'])} />
    <div className={cx(styles.column, styles['column-hide-md'])} />
    <div className={cx(styles.column, styles['column-hide-md'])} />
    <div className={cx(styles.column, styles['column-hide-md'])} />
    {showColumnMixins && (
      <div className={styles.spanContainer}>
        <div className={cx(styles.span, styles['span-6'])}>
          .span-6
        </div>
        <div className={cx(styles.span, styles['span-7'])}>
          .span-7
        </div>
        <div className={cx(styles.span, styles['span-full'])}>
          .span-full
        </div>
      </div>
    )}
  </main>
)

export default LayoutGrid
