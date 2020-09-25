import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import classnames from 'classnames'
import moment from 'moment'
import 'moment/locale/ru'
import Icon from '../Icon'
import Years from './elements/years'
import Months from './elements/months'
import Days from './elements/days'
import Input from '../Input'
import Arrow from '../util/arrow'
import PropTypes from 'prop-types'
import DateRangePicker from '../DateRangePicker'

moment.locale('ru')

const DatePicker = props => {
  const {
    value,
    onChangeDate,
    disabled,
    name,
    readOnly,
    position,
    status,
  } = props

  const [showPicker, toggleShowPicker] = useState(false)
  const [resetIconStatus, toggleResetIconStatus] = useState(false)
  const [date, setDate] = useState({
    month: value ? moment(value, 'DD-MM-YYYY').format('MM') : null,
    day: value ? moment(value, 'DD-MM-YYYY').format('DD') : null,
    moment: value ? moment(value, 'DD-MM-YYYY') : null,
  })
  const [inputValue, setInputValue] = useState(value ? value : '')
  const [yearsCanvas, setYearsCanvas] = useState(getYears())
  const [activeTab, setTab] = useState('year')

  const ref = useRef(null)

  function setYear(year) {
    const m = moment()
    setDate(prev => {
      const moment = !prev.moment ? m.year(year) : prev.moment.year(year)
      return {
        ...prev,
        moment,
      }
    })

    setTab('month')
  }

  function setMonth(month) {
    setDate(prev => {
      return {
        ...prev,
        month,
        moment: prev.moment.month(month - 1),
      }
    })

    setTab('day')
  }

  function setDay(day) {
    setDate(prev => {
      return {
        ...prev,
        day,
        moment: prev.moment
          .year(+prev.moment.format('YYYY'))
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

  function renderTab() {
    switch (activeTab) {
      case 'month':
        return (
          <Months
            data={moment.monthsShort()}
            setMonth={setMonth}
            current={date}
          />
        )
      case 'day':
        return (
          <Days
            data={getMonthCanvas(date.moment)}
            setDay={setDay}
            current={date}
            weekDays={moment.weekdaysShort(true)}>
            > День
          </Days>
        )
      default:
        return (
          <Years
            data={yearsCanvas}
            setYear={setYear}
            current={date}
            setYearsCanvas={setYearsCanvas}
          />
        )
    }
  }

  function handleBlur(inputValue) {
    const regExp = /^\d\d.\d\d.\d\d\d\d$/

    if (
      inputValue &&
      regExp.test(inputValue) &&
      moment(inputValue, 'DD-MM-YYYY').isValid()
    ) {
      setDate({
        month: moment(inputValue, 'DD-MM-YYYY').format('MM'),
        day: moment(inputValue, 'DD-MM-YYYY').format('DD'),
        moment: moment(inputValue, 'DD-MM-YYYY'),
      })
    } else {
      if (date.moment) {
        setInputValue(date.moment.format('DD-MM-YYYY'))
      } else {
        setInputValue('')
      }
    }
  }

  function outsideDateValidation(value) {
    const regExp = /^\d\d-\d\d-\d\d\d\d$/

    if (regExp.test(value) && moment(value, 'DD-MM-YYYY').isValid()) {
      return true
    } else {
      console.error('Передайте валидную дату! Текущая:', value)
      setInputValue('')
      setDate({ month: null, day: null, moment: null })
    }
  }

  function updateInputValue() {
    const isCanComplete = dateState => {
      return Object.values(dateState).every(value => !!value)
    }

    if (isCanComplete(date)) {
      const newValue = `${date.moment.format('DD-MM-YYYY')}`

      setInputValue(newValue)
      onChangeDate && onChangeDate(newValue)
    }
  }

  function showResetIcon() {
    if (inputValue.trim()) {
      toggleResetIconStatus(true)
    }
  }

  function resetPickerValues() {
    setTab('year')
    setInputValue('')
    setDate({
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

  const iconFillColor = status && status === 'error' ? 'error' : 'primary'

  const renderSuffix = () => {
    if (resetIconStatus) {
      return (
        <Icon.Medium
          className={styles.icon}
          type="close"
          fill={iconFillColor}
          onClick={resetPickerValues}
        />
      )
    }

    return (
      <Icon.Medium
        className={styles.icon}
        type="calendar"
        fill={iconFillColor}
      />
    )
  }

  const renderTabArrow = () => {
    return <Arrow className={styles.tabArrow} fill="white" />
  }

  useEffect(() => {
    if (value && outsideDateValidation(value)) {
      setInputValue(value)

      setDate({
        month: moment(value, 'DD-MM-YYYY').format('MM'),
        day: moment(value, 'DD-MM-YYYY').format('DD'),
        moment: moment(value, 'DD-MM-YYYY'),
      })
    }
  }, [value])

  useEffect(() => {
    updateInputValue()
  }, [date])

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
        onMouseEnter={() => showResetIcon()}
        onMouseLeave={() => toggleResetIconStatus(false)}>
        <Input
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          onBlur={event => handleBlur(event.target.value)}
          onFocus={() => toggleShowPicker(true)}
          mask="99.99.9999"
          maskChar=" "
          label="Введите дату"
          name={name}
          status={status}
          readOnly={readOnly}
          disabled={disabled}
          suffix={renderSuffix()}
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
          <header className={styles.pickerHeader}>
            <div
              className={styles.pickerHeaderItem}
              onClick={() => {
                if (date.moment) {
                  setTab('year')
                }
              }}>
              {activeTab === 'year' && renderTabArrow()}
              <span>{date.moment ? date.moment.format('YYYY') : 'год'}</span>
            </div>
            <div
              className={styles.pickerHeaderItem}
              onClick={() => {
                if (date.moment && date.moment.format('YYYY')) {
                  setTab('month')
                }
              }}>
              {activeTab === 'month' && renderTabArrow()}
              <span
                className={classnames({
                  [styles.headerItemDisabled]: !date.moment,
                })}>
                {date.month ? date.moment.format('MMMM') : 'месяц'}
              </span>
            </div>
            <div
              className={styles.pickerHeaderItem}
              onClick={() => {
                if (date.month) {
                  setTab('day')
                }
              }}>
              {activeTab === 'day' && renderTabArrow()}
              <span
                className={classnames({
                  [styles.headerItemDisabled]: !date.month,
                })}>
                {date.day ? date.moment.format('D') : 'день'}
              </span>
            </div>
          </header>
          <div className={styles.pickerBody}>{renderTab()}</div>
        </div>
      )}
    </div>
  )
}

export default DatePicker

DatePicker.defaultProps = {
  position: 'under',
}

DatePicker.displayName = 'DatePicker' //Needed for FormItem component

DatePicker.propTypes = {
  /** Задаваемое значение */
  value: PropTypes.string,
  /** Callback, вызываемый при изменении даты */
  onChangeDate: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  /** Запрет ручного ввода данных */
  readOnly: PropTypes.bool,
  /** Направление открывающегося списка */
  position: PropTypes.oneOf(['under', 'above']),
}
