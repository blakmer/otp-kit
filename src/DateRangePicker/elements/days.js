import React, { Fragment, useEffect } from 'react'
import styles from '../index.module.css'
import classnames from 'classnames'
import { fillInputValue, isCanComplete } from '../index'

const Days = props => {
  const {
    data,
    setDay,
    current,
    weekDays,
    start,
    end,
    startDate,
    endDate,
    setEndDate,
    setTabRight,
    setValue,
    onChangeDate,
  } = props

  const isDisabled = day => {
    const cuzYearsEqual =
      end &&
      startDate.moment &&
      startDate.moment.format('YYYY') === endDate.moment.format('YYYY')

    return (
      cuzYearsEqual && startDate.month === endDate.month && day < +startDate.day
    )
  }

  const isYellow = elem => {
    const startConditions = start && startDate.moment && endDate.moment
    const endConditions = end && startDate.moment && endDate.moment

    const anotherMonthDayStartAndYearsEqual =
      start &&
      endDate.day &&
      startDate.moment.format('YYYY') === endDate.moment.format('YYYY') &&
      startDate.month < endDate.month &&
      elem.moment.isAfter(startDate.moment.format('YYYY-MM-DD'))

    const anotherMonthDayEndAndYearsEqual =
      end &&
      endDate.day &&
      startDate.month < endDate.month &&
      startDate.moment.format('YYYY') === endDate.moment.format('YYYY') &&
      elem.moment.isBefore(endDate.moment.format('YYYY-MM-DD'))

    const anotherMonthDayStart =
      start &&
      endDate.day &&
      startDate.moment.format('YYYY') < endDate.moment.format('YYYY') &&
      elem.moment.isAfter(startDate.moment.format('YYYY-MM-DD'))

    const anotherMonthDayEnd =
      end &&
      endDate.day &&
      startDate.moment.format('YYYY') < endDate.moment.format('YYYY') &&
      elem.moment.isBefore(endDate.moment.format('YYYY-MM-DD'))

    return (
      (startConditions &&
        endDate.day &&
        startDate.moment.format('YYYY') === endDate.moment.format('YYYY') &&
        startDate.month < endDate.month &&
        +elem.month === startDate.month &&
        +elem.day > startDate.day) ||
      (endConditions &&
        startDate.moment.format('YYYY') === endDate.moment.format('YYYY') &&
        startDate.month < endDate.month &&
        +elem.month === endDate.month &&
        +elem.day < endDate.day) ||
      (startConditions &&
        endDate.day &&
        startDate.moment.format('YYYY') < endDate.moment.format('YYYY') &&
        +elem.month === startDate.month &&
        +elem.day > startDate.day) ||
      (endConditions &&
        startDate.moment.format('YYYY') < endDate.moment.format('YYYY') &&
        +elem.month === endDate.month &&
        +elem.day < endDate.day) ||
      anotherMonthDayStartAndYearsEqual ||
      anotherMonthDayEndAndYearsEqual ||
      anotherMonthDayStart ||
      anotherMonthDayEnd
    )
  }

  function onClickHandler(elem) {
    const startMoreEnd =
      start &&
      startDate.moment &&
      endDate.moment &&
      startDate.moment.format('YYYY') === endDate.moment.format('YYYY') &&
      startDate.month === endDate.month &&
      elem.day > endDate.day

    if (startMoreEnd) {
      setTabRight('year')
      setEndDate({ month: '', day: '', moment: null })
      setValue(`${startDate.moment.format('DD-MM-YYYY')}}`)
      onChangeDate(null)
    }

    if (elem.month === current.format('MM')) {
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
                [styles.yellow]: isYellow(elem),
                [styles.weekend]: elem.name === 'сб' || elem.name === 'вс',
                [styles.weekendDisabled]:
                  (elem.name === 'сб' || elem.name === 'вс') &&
                  isDisabled(elem.day),
                [styles.disabled]: isDisabled(elem.day),
                [styles.anotherMonthDay]: elem.month !== current.format('MM'),
                [styles.activeItem]:
                  (start &&
                    startDate.day &&
                    +elem.day === +startDate.moment.format('DD')) ||
                  (end &&
                    endDate.day &&
                    +elem.day === +endDate.moment.format('DD')),
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
