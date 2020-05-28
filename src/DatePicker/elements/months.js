import React from 'react'
import styles from '../index.module.css'
import classnames from 'classnames'

const Months = props => {
  const { data, setMonth, current } = props

  return (
    <ul className={styles.years}>
      {data.map((month, index) => {
        return (
          <li
            key={month}
            onClick={() => setMonth(index + 1)}
            className={classnames({
              [styles.activeItem]:
                current.month &&
                index + 1 === parseInt(current.moment.format('MM')),
            })}>
            {month}
          </li>
        )
      })}
    </ul>
  )
}

export default Months
