import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './ExampleComponent.module.scss'

interface ExampleComponentProps {
  text: string
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ text }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `${text} - ${count} times`
  }, [count, text])

  const containerClasses = classNames(styles.container, styles.someOtherClass)

  return (
    <div className={containerClasses}>
      <h1>{text}</h1>
      <button
        type='button'
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <p>
        You clicked
        {count}
        times
      </p>
    </div>
  )
}

export default ExampleComponent
