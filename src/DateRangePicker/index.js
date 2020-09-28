import React, { useState, useEffect, useRef } from 'react'
import styles from './index.module.css'
import classnames from 'classnames'
import moment from 'moment'
import Years from './elements/years'
import Months from './elements/months'
import Days from './elements/days'
import Icon from '../Icon'
import InputWithMask from '../InputWithMask'
import PropTypes from 'prop-types'
import TimeRange from '../TimeRange'
import { timeChecks } from '../TimeRange/utils'
import Arrow from '../util/arrow'

moment.locale('ru')

function useDateState(value, index) {
  return useState({
    month:
      Array.isArray(value) && value.length === 2
        ? moment(value[index], 'DD-MM-YYYY').format('MM')
        : null,
    day:
      Array.isArray(value) && value.length === 2
        ? moment(value[index], 'DD-MM-YYYY').format('DD')
        : null,
    moment:
      Array.isArray(value) && value.length === 2
        ? moment(value[index], 'DD-MM-YYYY')
        : null,
  })
}

function useInputState(date, time) {
  if (Array.isArray(date) && date.length === 2 && !time) {
    return useState(`${date[0]} – ${date[1]}`)
  }

  if (
    Array.isArray(date) &&
    date.length === 2 &&
    Array.isArray(time.value) &&
    time.value.length === 2
  ) {
    return useState(
      `${date[0]} | ${time.value[0]} – ${date[1]} | ${time.value[1]}`
    )
  }

  if (
    (Array.isArray(date) &&
      date.length === 2 &&
      Array.isArray(time.value) &&
      !time.value.length) ||
    (Array.isArray(date) && date.length === 2 && time.value === null)
  ) {
    return useState(`${date[0]} | 00:00 – ${date[1]} | 23:59`)
  }

  return useState('')
}

const DateRangePicker = props => {
  const {
    value,
    onChangeDate,
    disabled,
    name,
    readOnly,
    position,
    timeRangeOptions,
  } = props

  const [startDate, setStartDate] = useDateState(value, 0)
  const [endDate, setEndDate] = useDateState(value, 1)
  const [inputValue, setInputValue] = useInputState(value, timeRangeOptions)

  const [activeTabLeft, setTabLeft] = useState('year')
  const [activeTabRight, setTabRight] = useState('year')
  const [showPicker, toggleShowPicker] = useState(false)
  const [resetIconStatus, toggleResetIconStatus] = useState(false)
  const [canUpdate, setCanUpdate] = useState(true)
  const [yearsCanvasLeft, setYearsCanvasLeft] = useState(getYears())
  const [yearsCanvasRight, setYearsCanvasRight] = useState(getYears())

  const ref = useRef(null)

  const isTimePickerEnable = () => {
    if (timeRangeOptions && startDate.moment && endDate.moment) {
      return (
        startDate.moment.format('YYYY-MM-DD') ===
        endDate.moment.format('YYYY-MM-DD')
      )
    }
  }

  function setYear(year, params) {
    const m = moment()
    params.setDate(prev => {
      const moment = !prev.moment ? m.year(year) : prev.moment.year(year)
      return {
        ...prev,
        moment,
      }
    })

    params.setTab('month')
  }

  function setMonth(month, params) {
    params.setDate(prev => {
      return {
        ...prev,
        month,
        moment: prev.moment.month(month - 1),
      }
    })

    params.setTab('day')
  }

  function setDay(day, params) {
    params.setDate(prev => {
      return {
        ...prev,
        day,
        moment: prev.moment
          .year(+params.date.moment.format('YYYY'))
          .month(prev.month - 1)
          .date(day),
      }
    })
  }

  function getYears() {
    const year = parseInt(moment().format('YYYY'))
    return [
      { text: year - 7, switcher: true },
      { text: year - 6, switcher: false },
      { text: year - 5, switcher: false },
      { text: year - 4, switcher: false },
      { text: year - 3, switcher: false },
      { text: year - 2, switcher: false },
      { text: year - 1, switcher: false },
      { text: year, switcher: false },
      { text: year + 1, switcher: false },
      { text: year + 2, switcher: false },
      { text: year + 3, switcher: false },
      { text: year + 4, switcher: true },
    ]
  }

  function getMonthCanvas(date) {
    const firstMonday = moment(date.format())
      .startOf('month')
      .weekday(0)
    const lastSunday = moment(date.format())
      .endOf('month')
      .weekday(6)

    const count = lastSunday.diff(firstMonday, 'day')
    const monthObject = []
    const current = firstMonday

    let row = 0,
      cell = 0,
      br = true

    while (row <= count) {
      if (br) {
        monthObject.push([])
        br = !br
      }
      monthObject[cell].push({
        day: current.format('D'),
        month: current.format('MM'),
        year: current.format('YYYY'),
        name: current.format('ddd'),
        moment: moment(
          `${current.format('YYYY')}-${current.format('MM')}-${current.format(
            'D'
          )}`
        ),
      })

      if (current.format('d') === '0') {
        br = !br
        cell++
      }
      current.add(1, 'day')
      row++
    }

    return monthObject
  }

  function renderLeftCalendar() {
    switch (activeTabLeft) {
      case 'month':
        return (
          <Months
            start
            startDate={startDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setTabRight={setTabRight}
            startMonth={startDate.month}
            data={moment.monthsShort()}
            setValue={setInputValue}
            onChangeDate={onChangeDate}
            setMonth={month =>
              setMonth(month, {
                date: startDate,
                setDate: setStartDate,
                setTab: setTabLeft,
                type: 'start',
              })
            }
          />
        )
      case 'day':
        return (
          <Days
            start
            startDate={startDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setTabRight={setTabRight}
            data={getMonthCanvas(startDate.moment)}
            setDay={day =>
              setDay(day, {
                date: startDate,
                setDate: setStartDate,
                setTab: setTabLeft,
                type: 'start',
              })
            }
            onChangeDate={onChangeDate}
            current={startDate.moment}
            setValue={setInputValue}
            weekDays={moment.weekdaysShort(true)}>
            День
          </Days>
        )
      default:
        return (
          <Years
            start
            startDate={startDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setTabRight={setTabRight}
            startYear={startDate.moment && startDate.moment.format('YYYY')}
            data={yearsCanvasLeft}
            setYearsCanvas={setYearsCanvasLeft}
            setValue={setInputValue}
            onChangeDate={onChangeDate}
            setYear={year =>
              setYear(year, {
                date: startDate,
                setDate: setStartDate,
                setTab: setTabLeft,
                type: 'start',
              })
            }
          />
        )
    }
  }

  function renderRightCalendar() {
    switch (activeTabRight) {
      case 'month':
        return (
          <Months
            end
            startDate={startDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setTabRight={setTabRight}
            endMonth={endDate.month}
            data={moment.monthsShort()}
            setValue={setInputValue}
            onChangeDate={onChangeDate}
            setMonth={month =>
              setMonth(month, {
                date: endDate,
                setDate: setEndDate,
                setTab: setTabRight,
                type: 'end',
              })
            }
          />
        )
      case 'day':
        return (
          <Days
            end
            startDate={startDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setTabRight={setTabRight}
            data={getMonthCanvas(endDate.moment)}
            onChangeDate={onChangeDate}
            setDay={day =>
              setDay(day, {
                date: endDate,
                setDate: setEndDate,
                setTab: setTabRight,
                type: 'end',
              })
            }
            current={endDate.moment}
            setValue={setInputValue}
            weekDays={moment.weekdaysShort(true)}>
            > День
          </Days>
        )
      default:
        return (
          <Years
            end
            startDate={startDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setTabRight={setTabRight}
            endYear={endDate.moment && endDate.moment.format('YYYY')}
            data={yearsCanvasRight}
            setYearsCanvas={setYearsCanvasRight}
            setValue={setInputValue}
            onChangeDate={onChangeDate}
            setYear={year =>
              setYear(year, {
                date: endDate,
                setDate: setEndDate,
                setTab: setTabRight,
                type: 'end',
              })
            }
          />
        )
    }
  }

  function inputValidation(inputValue) {
    const start = inputValue.split('–')[0].trim()
    const end = inputValue.split('–')[1].trim()

    const startValid =
      !start.includes('_') && moment(start, 'DD-MM-YYYY').isValid()

    const endValid = !end.includes('_') && moment(end, 'DD-MM-YYYY').isValid()

    const endMoreThenStartOrEquals = moment(end, 'DD-MM-YYYY').isSameOrAfter(
      moment(start, 'DD-MM-YYYY').format('YYYY-MM-DD')
    )

    return startValid && endValid && endMoreThenStartOrEquals
  }

  function inputValidationWithTime(inputValue) {
    const regExp = /^\d\d:\d\d$/
    const [startDate, startTime] = inputValue.split('–')[0].split('|')
    const [endDate, endTime] = inputValue.split('–')[1].split('|')
    const [startTimeMoment, endTimeMoment] = [
      startTime.trim(),
      endTime.trim(),
    ].map(time => moment(time, 'HH:mm'))

    const startDateIsValid =
      !startDate.trim().includes('_') &&
      moment(startDate.trim(), 'DD-MM-YYYY').isValid()

    const endDateIsValid =
      !endDate.trim().includes('_') &&
      moment(endDate.trim(), 'DD-MM-YYYY').isValid()

    const endMoreThenStartOrEquals = moment(
      endDate.trim(),
      'DD-MM-YYYY'
    ).isSameOrAfter(moment(startDate.trim(), 'DD-MM-YYYY').format('YYYY-MM-DD'))

    const startTimeIsValid =
      startTimeMoment.isValid() && regExp.test(startTime.trim())
    const endTimeIsValid =
      endTimeMoment.isValid() && regExp.test(endTime.trim())

    return (
      startDateIsValid &&
      endDateIsValid &&
      endMoreThenStartOrEquals &&
      startTimeIsValid &&
      endTimeIsValid
    )
  }

  function handleBlur(inputValue) {
    if (inputValue && inputValidation(inputValue)) {
      const start = inputValue.split('–')[0].trim()
      const end = inputValue.split('–')[1].trim()

      setStartDate({
        month: moment(start, 'DD-MM-YYYY').format('MM'),
        day: moment(start, 'DD-MM-YYYY').format('DD'),
        moment: moment(start, 'DD-MM-YYYY'),
      })

      setEndDate({
        month: moment(end, 'DD-MM-YYYY').format('MM'),
        day: moment(end, 'DD-MM-YYYY').format('DD'),
        moment: moment(end, 'DD-MM-YYYY'),
      })
    } else {
      /* если валидация после блюра неудачна,
       * то нужно сбрасывать инпут на последнее валидное
       * значение согласно стейту */
      const startComplete = startDate.moment && !endDate.moment
      const bothComplete = startDate.moment && endDate.moment

      if (startComplete) {
        setInputValue(`${startDate.moment.format('DD-MM-YYYY')}}`)
      } else if (bothComplete) {
        setInputValue(
          `${startDate.moment.format('DD-MM-YYYY')} – ${endDate.moment.format(
            'DD-MM-YYYY'
          )}`
        )
      } else {
        setInputValue('')
      }
    }
  }

  function handleBlurWithTime(inputValue) {
    if (inputValue && inputValidationWithTime(inputValue)) {
      const [startDate, startTime] = inputValue.split('–')[0].split('|')
      const [endDate, endTime] = inputValue.split('–')[1].split('|')

      setStartDate({
        month: moment(startDate, 'DD-MM-YYYY').format('MM'),
        day: moment(startDate, 'DD-MM-YYYY').format('DD'),
        moment: moment(startDate, 'DD-MM-YYYY'),
      })

      setEndDate({
        month: moment(endDate, 'DD-MM-YYYY').format('MM'),
        day: moment(endDate, 'DD-MM-YYYY').format('DD'),
        moment: moment(endDate, 'DD-MM-YYYY'),
      })

      timeRangeOptions.onChange([startTime.trim(), endTime.trim()])
    } else {
      const startComplete = startDate.moment && !endDate.moment
      const bothComplete = startDate.moment && endDate.moment

      if (startComplete) {
        setInputValue(
          `${startDate.moment.format('DD-MM-YYYY')} | ${
            timeRangeOptions.value[0] ? timeRangeOptions.value[0] : '00:00'
          }`
        )
      } else if (bothComplete) {
        setInputValue(
          `${startDate.moment.format('DD-MM-YYYY')} | ${
            timeRangeOptions.value ? timeRangeOptions.value[0] : '00:00'
          } – ${endDate.moment.format('DD-MM-YYYY')} | ${
            timeRangeOptions.value ? timeRangeOptions.value[1] : '23:59'
          }`
        )
      } else {
        setInputValue('')
      }
    }
  }

  function updateInputValue() {
    const isCanComplete = dateState => {
      return Object.values(dateState).every(value => !!value)
    }

    const startComplete = isCanComplete(startDate) && !isCanComplete(endDate)
    const bothComplete = isCanComplete(startDate) && isCanComplete(endDate)

    if (startComplete) {
      const newValue = `${startDate.moment.format('DD-MM-YYYY')}`

      setInputValue(newValue)
    }

    if (bothComplete) {
      const newValue = `${startDate.moment.format(
        'DD-MM-YYYY'
      )} – ${endDate.moment.format('DD-MM-YYYY')}`

      if (inputValidation(newValue)) {
        setInputValue(newValue)

        if (onChangeDate) {
          const newOutsideDate = [
            newValue.split('–')[0].trim(),
            newValue.split('–')[1].trim(),
          ]

          onChangeDate(newOutsideDate)
        }
      }
    }
  }

  function updateInputValueWithTime() {
    const isCanComplete = dateState => {
      return Object.values(dateState).every(value => !!value)
    }

    const startComplete = isCanComplete(startDate) && !isCanComplete(endDate)
    const bothComplete = isCanComplete(startDate) && isCanComplete(endDate)

    const startTime =
      timeRangeOptions.value && timeRangeOptions.value.length === 2
        ? timeRangeOptions.value[0]
        : '00:00'

    const endTime =
      timeRangeOptions.value && timeRangeOptions.value.length === 2
        ? timeRangeOptions.value[1]
        : '23:59'

    if (startComplete) {
      const newValue = `${startDate.moment.format('DD-MM-YYYY')} | ${startTime}`

      setInputValue(newValue)
    }

    if (bothComplete) {
      const newValue = `${startDate.moment.format(
        'DD-MM-YYYY'
      )} | ${startTime} – ${endDate.moment.format('DD-MM-YYYY')} | ${endTime}`

      if (inputValidationWithTime(newValue)) {
        setInputValue(newValue)

        if (onChangeDate) {
          const newOutsideDate = [
            newValue
              .split('–')[0]
              .split('|')[0]
              .trim(),
            newValue
              .split('–')[1]
              .split('|')[0]
              .trim(),
          ]

          onChangeDate(newOutsideDate)
        }
      }
    }
  }

  function outsideDateValidation(value) {
    if (Array.isArray(value) && value.length === 2) {
      const [start, end] = value
      const regExp = /^\d\d-\d\d-\d\d\d\d$/

      if (
        regExp.test(start) &&
        regExp.test(end) &&
        inputValidation(`${start} – ${end}`)
      ) {
        return true
      } else {
        console.error('Передайте валидный диапазон дат! Текущий:', value)
        setInputValue('')
        setStartDate({ month: null, day: null, moment: null })
        setEndDate({ month: null, day: null, moment: null })
      }
    }
  }

  function outsideDateValidationWithTime(date, time) {
    const dateIsValid = date => {
      if (date === null || (Array.isArray(date) && !date.length)) {
        return true
      }

      if (Array.isArray(date) && date.length === 2) {
        const [start, end] = date
        const regExp = /^\d\d-\d\d-\d\d\d\d$/

        const startValid = moment(start, 'DD-MM-YYYY').isValid()
        const endValid = moment(end, 'DD-MM-YYYY').isValid()
        const endMoreThenStartOrEquals = moment(
          end,
          'DD-MM-YYYY'
        ).isSameOrAfter(moment(start, 'DD-MM-YYYY').format('YYYY-MM-DD'))

        return (
          regExp.test(start) &&
          regExp.test(end) &&
          startValid &&
          endValid &&
          endMoreThenStartOrEquals
        )
      }
    }
    const timeIsValid = time => {
      if (time === null || (Array.isArray(time) && !time.length)) {
        return true
      }

      if (Array.isArray(time) && time.length === 2) {
        const [startTimeMoment, endTimeMoment] = time.map(time =>
          moment(time, 'HH:mm')
        )
        const startTimeIsValid = startTimeMoment.isValid()
        const endTimeIsValid = endTimeMoment.isValid()
        const regExp = /^\d\d:\d\d$/

        return (
          regExp.test(time[0]) &&
          regExp.test(time[1]) &&
          startTimeIsValid &&
          endTimeIsValid
        )
      }
    }

    if (!dateIsValid(date) || !timeIsValid(time)) {
      console.error(
        'Передайте валидный диапазон дат и времени! Текущие:',
        date,
        time
      )
      setInputValue('')
      setStartDate({ month: null, day: null, moment: null })
      setEndDate({ month: null, day: null, moment: null })
      timeRangeOptions.onChange(['00:00', '23:59'])
    } else {
      return true
    }
  }

  async function setPickerByOutside() {
    await Promise.resolve()
    /** https://stackoverflow.com/questions/53048495/does-react-batch-state-update-functions-when-using-hooks -- второй комментарий
     * https://codesandbox.io/s/739rqyyqmq */

    if (outsideDateValidation(value)) {
      const newValue = `${value[0]} – ${value[1]}`

      setCanUpdate(false)

      setInputValue(newValue)

      setStartDate({
        month: moment(value[0], 'DD-MM-YYYY').format('MM'),
        day: moment(value[0], 'DD-MM-YYYY').format('DD'),
        moment: moment(value[0], 'DD-MM-YYYY'),
      })

      setEndDate({
        month: moment(value[1], 'DD-MM-YYYY').format('MM'),
        day: moment(value[1], 'DD-MM-YYYY').format('DD'),
        moment: moment(value[1], 'DD-MM-YYYY'),
      })

      setCanUpdate(true)
    }
  }

  async function setPickerByOutsideWithTime() {
    await Promise.resolve()

    if (outsideDateValidationWithTime(value, timeRangeOptions.value)) {
      if (Array.isArray(value) && value.length === 2) {
        const newValue = `${value[0]} | ${
          timeRangeOptions.value && timeRangeOptions.value.length === 2
            ? timeRangeOptions.value[0]
            : '00:00'
        } – ${value[1]} | ${
          timeRangeOptions.value && timeRangeOptions.value.length === 2
            ? timeRangeOptions.value[1]
            : '23:59'
        }`

        setCanUpdate(false)

        setInputValue(newValue)

        setStartDate({
          month: moment(value[0], 'DD-MM-YYYY').format('MM'),
          day: moment(value[0], 'DD-MM-YYYY').format('DD'),
          moment: moment(value[0], 'DD-MM-YYYY'),
        })

        setEndDate({
          month: moment(value[1], 'DD-MM-YYYY').format('MM'),
          day: moment(value[1], 'DD-MM-YYYY').format('DD'),
          moment: moment(value[1], 'DD-MM-YYYY'),
        })

        setCanUpdate(true)
      }
    }
  }

  function showResetIcon() {
    if (inputValue.trim()) {
      toggleResetIconStatus(true)
    }
  }

  function resetPickerValues() {
    setTabLeft('year')
    setTabRight('year')
    setInputValue('')
    setStartDate({
      month: null,
      day: null,
      moment: null,
    })
    setEndDate({
      month: null,
      day: null,
      moment: null,
    })
    onChangeDate(null)
  }

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      toggleShowPicker(false)
    }
  }

  const renderSuffix = () => {
    if (resetIconStatus) {
      return (
        <Icon.Medium
          className={styles.icon}
          type="close"
          fill="primary"
          onClick={resetPickerValues}
        />
      )
    }

    return (
      <Icon.Medium className={styles.icon} type="calendar" fill="primary" />
    )
  }

  const renderTabArrow = () => {
    return <Arrow className={styles.tabArrow} fill="white" />
  }

  useEffect(() => {
    !timeRangeOptions ? setPickerByOutside() : setPickerByOutsideWithTime()
  }, [value])

  useEffect(() => {
    if (canUpdate) {
      !timeRangeOptions ? updateInputValue() : updateInputValueWithTime()
    }
  }, [startDate, endDate])

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return (
    <div className={styles.wrapper} ref={ref}>
      <div
        className={styles.inputWrapper}
        style={{ width: timeRangeOptions ? 417 : 248 }}
        onMouseEnter={() => showResetIcon()}
        onMouseLeave={() => toggleResetIconStatus(false)}>
        <InputWithMask
          mask={
            !timeRangeOptions ? 'date – date' : 'date | 00:00 – date | 00:00'
          }
          blocks={{
            date: {
              mask: Date,
            },
          }}
          value={inputValue}
          onAccept={value => {
            setInputValue(value)
          }}
          onBlur={event =>
            !timeRangeOptions
              ? handleBlur(event.target.value)
              : handleBlurWithTime(event.target.value)
          }
          onFocus={() => toggleShowPicker(true)}
          label="Введите даты"
          name={name}
          readOnly={readOnly}
          disabled={disabled}
          suffix={renderSuffix()}
          block
        />
      </div>
      {showPicker && (
        <div
          className={classnames({
            [styles.picker]: true,
            [styles.pickerUnder]: position === 'under',
            [styles.pickerAbove]: position === 'above',
          })}>
          {position === 'above' && (
            <Arrow className={styles.aboveArrow} fill="white" />
          )}
          {position === 'under' && (
            <Arrow className={styles.underArrow} fill="primary" />
          )}
          <header className={styles.header}>
            <section className={styles.headerItem}>
              <div
                className={styles.pickerHeaderItem}
                onClick={() => {
                  if (startDate.moment) {
                    setTabLeft('year')
                  }
                }}>
                {activeTabLeft === 'year' && renderTabArrow()}
                <span>
                  {startDate.moment ? startDate.moment.format('YYYY') : 'год'}
                </span>
              </div>
              <div
                className={styles.pickerHeaderItem}
                onClick={() => {
                  if (startDate.moment && startDate.moment.format('YYYY')) {
                    setTabLeft('month')
                  }
                }}>
                {activeTabLeft === 'month' && renderTabArrow()}
                <span
                  className={classnames({
                    [styles.headerItemDisabled]: !startDate.moment,
                  })}>
                  {startDate.month ? startDate.moment.format('MMMM') : 'месяц'}
                </span>
              </div>
              <div
                className={styles.pickerHeaderItem}
                onClick={() => {
                  if (startDate.month) {
                    setTabLeft('day')
                  }
                }}>
                {activeTabLeft === 'day' && renderTabArrow()}
                <span
                  className={classnames({
                    [styles.headerItemDisabled]: !startDate.month,
                  })}>
                  {startDate.day ? +startDate.moment.format('DD') : 'день'}
                </span>
              </div>
            </section>
            <div className={styles.headerDivider} />
            <section className={styles.headerItem}>
              <div
                className={styles.pickerHeaderItem}
                onClick={() => {
                  if (endDate.moment) {
                    setTabRight('year')
                  }
                }}>
                {activeTabRight === 'year' && renderTabArrow()}
                <span
                  className={classnames({
                    [styles.headerItemDisabled]: !startDate.day,
                  })}>
                  {endDate.moment ? endDate.moment.format('YYYY') : 'год'}
                </span>
              </div>
              <div
                className={styles.pickerHeaderItem}
                onClick={() => {
                  if (endDate.moment && endDate.moment.format('YYYY')) {
                    setTabRight('month')
                  }
                }}>
                {activeTabRight === 'month' && renderTabArrow()}
                <span
                  className={classnames({
                    [styles.headerItemDisabled]: !endDate.moment,
                  })}>
                  {endDate.month ? endDate.moment.format('MMMM') : ' месяц'}
                </span>
              </div>
              <div
                className={styles.pickerHeaderItem}
                onClick={() => {
                  if (endDate.month) {
                    setTabRight('day')
                  }
                }}>
                {activeTabRight === 'day' && renderTabArrow()}
                <span
                  className={classnames({
                    [styles.headerItemDisabled]: !endDate.month,
                  })}>
                  {endDate.day ? +endDate.moment.format('DD') : ' день'}
                </span>
              </div>
            </section>
          </header>
          <main className={styles.calendars}>
            <section className={styles.pickerItem}>
              {renderLeftCalendar()}
            </section>
            <section className={styles.pickerItem}>
              {renderRightCalendar()}
            </section>
          </main>
          {isTimePickerEnable() && (
            <footer className={styles.options}>
              <TimeRange
                value={timeRangeOptions.value}
                step={timeRangeOptions.step}
                withBubbles
                onChange={value => {
                  timeRangeOptions.onChange(value)
                  setInputValue(
                    `${startDate.moment.format('DD-MM-YYYY')} | ${
                      value[0]
                    } – ${endDate.moment.format('DD-MM-YYYY')} | ${value[1]}`
                  )
                }}
              />
            </footer>
          )}
        </div>
      )}
    </div>
  )
}

export default DateRangePicker

DateRangePicker.defaultProps = {
  position: 'under',
}

DateRangePicker.propTypes = {
  /** Задаваемое значение */
  value: PropTypes.array,
  /** Callback, вызываемый при изменении даты */
  onChangeDate: PropTypes.func,
  /** Направление открывающегося списка */
  position: PropTypes.oneOf(['under', 'above']),
  disabled: PropTypes.bool,
  name: PropTypes.string,
  /** Запрет ручного ввода данных */
  readOnly: PropTypes.bool,
  /** Свойства почасового ввода данных */
  timeRangeOptions: PropTypes.shape({
    /** Задаваемое значение */
    value: PropTypes.array,
    /** Шаг (60, 30, 15, 10, 5, 1) */
    step: PropTypes.oneOf([60, 30, 15, 10, 5, 1]),
    onChange: PropTypes.func,
  }),
}
