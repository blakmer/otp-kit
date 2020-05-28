import React, { useEffect } from 'react'
import Icon from '../../Icon'
import styles from '../index.module.css'
import classnames from 'classnames'
import moment from 'moment'
import {
  fillInputValue,
  isCanComplete,
  refresh,
  refreshDateLevel,
} from '../index'

const Years = props => {
  const {
    data,
    setYear,
    setYearsCanvas,
    startYear,
    endYear,
    startDate,
    endDate,
    setEndDate,
    setTabRight,
    start,
    end,
    setValue,
    onChangeDate,
  } = props

  const isFirst = index => data[0] === data[index]
  const isLast = index => data[data.length - 1] === data[index]
  const isDisabled = (year, index) => {
    const cuzEmptyStart = end && !startDate.day
    const cuzStartYearIsMore =
      end &&
      startDate.moment &&
      year < startDate.moment.format('YYYY') &&
      !isLast(index)

    return cuzEmptyStart || cuzStartYearIsMore
  }

  function onClickHandler(year, index) {
    const notFirstAndLast = !year.switcher

    const startYearMoreThenEndYear =
      start && endDate.moment && year.text > endDate.moment.format('YYYY')

    const startMonthMoreThenEndMonth =
      start &&
      endDate.moment &&
      year.text === +endDate.moment.format('YYYY') &&
      startDate.month > endDate.month

    const startDayMoreThenEndDay =
      start &&
      endDate.moment &&
      year.text === +endDate.moment.format('YYYY') &&
      startDate.month === endDate.month &&
      +startDate.day > +endDate.day

    const endMonthLessThenStartMonth =
      end &&
      endDate.month &&
      year.text === +startDate.moment.format('YYYY') &&
      startDate.month > endDate.month

    const endDayLessThenStartDay =
      end &&
      year.text === +startDate.moment.format('YYYY') &&
      startDate.month === endDate.month &&
      +startDate.day > +endDate.day

    if (notFirstAndLast) {
      if (
        startYearMoreThenEndYear ||
        startMonthMoreThenEndMonth ||
        startDayMoreThenEndDay
      ) {
        setTabRight('year')
        setEndDate({ month: '', day: '', moment: null })
        setValue(`${startDate.moment.format('DD-MM-YYYY')}}`)
        onChangeDate(null)
      } else if (endMonthLessThenStartMonth || endDayLessThenStartDay) {
        setTabRight('year')
        setEndDate({ month: '', day: '', moment: null })
        setValue(`${startDate.moment.format('DD-MM-YYYY')}}`)
        onChangeDate(null)
        return
      }

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
              [styles.disabled]: isDisabled(year.text, index),
              [styles.activeItem]:
                (startYear && year.text === +startYear && !year.switcher) ||
                (endYear && year.text === +endYear && !year.switcher),
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
