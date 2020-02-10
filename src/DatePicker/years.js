import React from 'react'
import styles from './index.module.css'

const Years = ({ data }) => {
  return (
    <ul className={styles.years}>
      {data.map(year => {
        return <li key={year}>{year}</li>
      })}
    </ul>
  )
}

export default Years
