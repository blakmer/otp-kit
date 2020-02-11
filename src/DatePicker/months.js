import React from 'react'
import styles from './index.module.css'

const Months = ({ data }) => {
  return (
    <ul className={styles.years}>
      {data.map(month => {
        return <li key={month}>{month}</li>
      })}
    </ul>
  )
}

export default Months
