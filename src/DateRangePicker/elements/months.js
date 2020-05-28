import React, { useEffect } from 'react'
import styles from '../index.module.css'
import classnames from 'classnames'
import moment from 'moment'
import { fillInputValue, isCanComplete } from '../index'

const Months = props => {
  const {
    data,
    setMonth,
    startMonth,
    endMonth,
    start,
    end,
    startDate,
    endDate,
    setEndDate,
    setTabRight,
    setValue,
    onChangeDate,
  } = props

  const isDisabled = month => {
    const cuzYearsEqual =
      end &&
      startDate.moment &&
      startDate.moment.format('YYYY') === endDate.moment.format('YYYY')

    return cuzYearsEqual && month < startDate.month
  }

  const isYellow = index => {
    return (
      (start &&
        startDate.moment &&
        endDate.moment &&
        endDate.month &&
        startDate.moment.format('YYYY') < endDate.moment.format('YYYY') &&
        startDate.month < index + 1) ||
      (end &&
        startDate.moment &&
        endDate.moment &&
        startDate.moment.format('YYYY') < endDate.moment.format('YYYY') &&
        endDate.month > index + 1)
    )
  }

  function onClickHandler(index) {
    const startMonthMoreThenEndMonth =
      start &&
      startDate.moment &&
      endDate.moment &&
      startDate.moment.format('YYYY') === endDate.moment.format('YYYY') &&
      index + 1 > endDate.month

    const startDayMoreThenEndDay =
      start &&
      startDate.moment &&
      endDate.moment &&
      startDate.moment.format('YYYY') === endDate.moment.format('YYYY') &&
      index + 1 === endDate.month &&
      +startDate.day > +endDate.day

    const endDayLessThenStartDay =
      end &&
      endDate.day &&
      startDate.moment.format('YYYY') === endDate.moment.format('YYYY') &&
      index + 1 === startDate.month &&
      +startDate.day > +endDate.day

    if (startMonthMoreThenEndMonth || startDayMoreThenEndDay) {
      setTabRight('year')
      setEndDate({ month: '', day: '', moment: null })
      setValue(`${startDate.moment.format('DD-MM-YYYY')}}`)
      onChangeDate(null)
    } else if (endDayLessThenStartDay) {
      setTabRight('year')
      setEndDate({ month: '', day: '', moment: null })
      setValue(`${startDate.moment.format('DD-MM-YYYY')}}`)
      onChangeDate(null)
      return
    }

    setMonth(index + 1)
  }

  return (
    <ul className={styles.months}>
      {data.map((month, index) => {
        return (
          <li
            key={month}
            onClick={() => onClickHandler(index)}
            className={classnames({
              [styles.yellow]: isYellow(index),
              [styles.activeItem]:
                (startMonth && index + 1 === +startMonth) ||
                (endMonth && index + 1 === +endMonth),
              [styles.disabled]: isDisabled(index + 1),
            })}>
            {month}
          </li>
        )
      })}
    </ul>
  )
}

export default Months
