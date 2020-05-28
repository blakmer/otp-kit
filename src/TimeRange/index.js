import React, { useState, useEffect } from 'react'
import InputRange from 'react-input-range'
import styles from './index.module.css'
import PropTypes from 'prop-types'
import {
  DEFAULT_STATE,
  ERRORS,
  STEPS,
  timeChecks,
  transformMinutesToValue,
  transformValueToTotalMinutes,
} from './utils'

const TimeRange = props => {
  const { value, onChange, step, name, minInterval, withBubbles } = props

  const [range, setRange] = useState(getStateValue(value))

  function getStateValue(value) {
    if (Array.isArray(value) && value.length === 2) {
      const { startIsValid, endIsValid, startIsBeforeEnd } = timeChecks(value)

      if (!startIsValid) {
        console.error(ERRORS.START_INVALID, value)
        return DEFAULT_STATE
      } else if (!endIsValid) {
        console.error(ERRORS.END_INVALID, value)
        return DEFAULT_STATE
      } else if (!startIsBeforeEnd) {
        console.error(ERRORS.INTERVAL_INVALID, value)
        return DEFAULT_STATE
      }

      return convertTimeToStateValue(value)
    } else {
      return DEFAULT_STATE
    }
  }

  function onChangeHandler({ min, max }) {
    /** первые две проверки устраняют баг npm-пакета
     * "react-input-range", в результате которого минимальное значение
     * могло стать ниже на единицу, а максимальное значение - больше на единицу */
    if (min < 0) {
      setRange({ min: 0, max })
    } else if (max > 24) {
      setRange({ min, max: 24 })
    } else if (max - min >= minInterval) {
      setRange({ min, max })
    }
  }

  function convertTimeToStateValue(timeArray) {
    const result = timeArray.map(time => {
      const [hours, minutes] = time.split(':')

      const afterDot =
        transformMinutesToValue(minutes) < 10
          ? `0${transformMinutesToValue(minutes)}`
          : transformMinutesToValue(minutes)

      return Number(`${hours}.${afterDot}`)
    })

    return { min: result[0], max: result[1] }
  }

  function convertStateValueToTime(value) {
    const totalMinutes = transformValueToTotalMinutes(value)

    const hours =
      Math.floor(totalMinutes / 60) < 10
        ? `0${Math.floor(totalMinutes / 60)}`
        : Math.floor(totalMinutes / 60)

    const minutes =
      totalMinutes % 60 < 10 ? `0${totalMinutes % 60}` : totalMinutes % 60

    if (hours === 24) {
      return '23:59'
    }

    return `${hours}:${minutes}`
  }

  function onChangeCompleteHandler(value) {
    const toOutside = [
      convertStateValueToTime(value.min),
      convertStateValueToTime(value.max),
    ]

    onChange(toOutside)
  }

  const renderTeeth = () => {
    return new Array(13).fill('').map((item, index) => <span key={index} />)
  }

  useEffect(() => {
    if (Array.isArray(value) && value.length === 2) {
      const { startIsValid, endIsValid, startIsBeforeEnd } = timeChecks(value)

      if (startIsValid && endIsValid && startIsBeforeEnd) {
        setRange({ ...convertTimeToStateValue(value) })
      } else {
        setRange({ min: 0, max: 24 })
      }
    }
  }, [value])

  return (
    <div className={styles.wrapper}>
      <InputRange
        classNames={{
          inputRange: styles.inputRange,
          minLabel: styles.labelHidden,
          maxLabel: styles.labelHidden,
          labelContainer: styles.labelContainer,
          activeTrack: `${styles.track} ${styles.trackActive}`,
          sliderContainer: styles.sliderContainer,
          valueLabel: `${styles.valueLabel} ${styles.valueLabelValue}`,
          slider: `${styles.slider} ${withBubbles ? styles.bubbled : null}`,
          track: `${styles.track} ${styles.trackBackground}`,
        }}
        formatLabel={convertStateValueToTime}
        minValue={0}
        maxValue={24}
        step={STEPS[step]}
        value={range}
        onChange={onChangeHandler}
        onChangeComplete={onChange && onChangeCompleteHandler}
        name={name}
      />

      <div className={styles.teeth}>{renderTeeth()}</div>
    </div>
  )
}

TimeRange.defaultProps = {
  step: 60,
  value: ['00:00', '23:59'],
  minInterval: 1,
}

TimeRange.propTypes = {
  value: PropTypes.array,
  step: PropTypes.oneOf([60, 30, 15, 10, 5, 1]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  minInterval: PropTypes.number,
  withBubbles: PropTypes.bool,
}

export default TimeRange
