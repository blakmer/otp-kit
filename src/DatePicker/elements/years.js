import React from 'react'
import Icon from '../../Icon'
import styles from '../index.module.css'
import classnames from 'classnames'

const Years = props => {
  const { data, setYear, current, setYearsCanvas } = props

  const isFirst = index => data[0] === data[index]
  const isLast = index => data[data.length - 1] === data[index]

  function onClickHandler(year, index) {
    const notFirstAndLast = !year.switcher

    if (notFirstAndLast) {
      setYear(year.text)
    } else {
      if (isFirst(index)) {
        setYearsCanvas(prev =>
          prev.map(year => ({ ...year, text: year.text - 10 }))
        )
      } else if (isLast(index)) {
        setYearsCanvas(prev =>
          prev.map(year => ({ ...year, text: year.text + 10 }))
        )
      }
    }
  }

  return (
    <ul className={styles.years}>
      {data.map((year, index) => {
        return (
          <li
            key={year.text}
            onClick={() => onClickHandler(year, index)}
            className={classnames({
              [styles.switcher]: year.switcher,
              [styles.activeItem]:
                current.moment &&
                year.text === parseInt(current.moment.format('YYYY')) &&
                !year.switcher,
            })}>
            {isFirst(index) && (
              <Icon.Small
                type="arrow-left"
                fill="disabled"
                className={styles.iconFirst}
              />
            )}
            {isLast(index) && (
              <Icon.Small
                type="arrow-right"
                fill="disabled"
                className={styles.iconLast}
              />
            )}
            <span>{year.text}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default Years
