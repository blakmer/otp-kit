import React, { Fragment } from 'react'
import styles from '../index.module.css'
import classnames from 'classnames'

const Days = props => {
  const { data, setDay, current, weekDays } = props

  function onClickHandler(elem) {
    if (elem.month === current.moment.format('MM')) {
      setDay(elem.day)
    }
  }

  function transformDaysDataToArray(data) {
    return data.reduce((acc, next) => {
      acc.push(...next)
      return acc
    }, [])
  }

  return (
    <Fragment>
      <ul className={styles.week}>
        {weekDays.map(day => (
          <li key={day}>{day}</li>
        ))}
      </ul>
      <ul className={styles.days}>
        {transformDaysDataToArray(data).map((elem, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickHandler(elem)}
              className={classnames(styles.day, {
                [styles.weekend]: elem.name === 'сб' || elem.name === 'вс',
                [styles.anotherMonthDay]:
                  elem.month !== current.moment.format('MM'),
                [styles.activeItem]:
                  current.day && elem.day === current.moment.format('D'),
              })}>
              {elem.day}
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
}

export default Days
