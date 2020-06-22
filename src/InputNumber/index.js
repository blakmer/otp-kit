import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ArrowUp from '../util/arrow-up'
import ArrowDown from '../util/arrow-down'

import styles from './index.module.css'

const toNumber = number => {
  let n = number
  if (typeof n === 'string') {
    n = n.replace(/[^0-9]*/g, '')
  }
  let result = isNaN(parseInt(n)) ? '' : parseInt(n)
  return result.toString()
}

const STATUSES = {
  default: 'default',
  error: 'error',
  warning: 'warning',
  disabled: 'disabled',
}

const InputNumber = props => {
  const {
    className,
    status,
    style,
    defaultValue,
    block,
    value,
    onChange,
    arrowsConfig,
    min,
    max,
    step,
    disabled,
  } = props

  const [val, setVal] = useState(defaultValue || '')
  const checkRange = num => {
    return +num < min ? min : +num > max ? max : +num
  }
  const handleUp = () => {
    let newVal = checkRange(+val + step)
    setVal(newVal)
    onChange(newVal)
  }
  const handleDown = () => {
    let newVal = checkRange(+val - step)
    setVal(newVal)
    onChange(newVal)
  }
  const handleChange = e => {
    let newVal =
      e.target.value === ''
        ? e.target.value
        : checkRange(toNumber(e.target.value))
    setVal(newVal)
    onChange(newVal)
  }

  return (
    <label
      className={classnames(
        styles.inputContainer,
        disabled && styles.disabled,
        block && styles.block,
        styles[status]
      )}
      style={style}>
      <input
        value={value === undefined ? val : value}
        defaultValue={defaultValue && toNumber(defaultValue)}
        disabled={status === 'disabled'}
        onChange={
          value === undefined
            ? handleChange
            : e => {
                onChange(e.target.value)
              }
        }
        className={classnames(styles.input, styles[status], className)}
      />
      <div className={styles.suffix}>
        <div className={styles.arrows}>
          <ArrowUp
            fill={disabled ? 'text-disabled' : 'primary'}
            onClick={arrowsConfig.upClick || handleUp}
          />
          <ArrowDown
            fill={disabled ? 'text-disabled' : 'primary'}
            onClick={arrowsConfig.downClick || handleDown}
          />
        </div>
      </div>
    </label>
  )
}

InputNumber.propTypes = {
  status: PropTypes.oneOf(Object.values(STATUSES)),
  className: PropTypes.string,
  style: PropTypes.object,
  arrowsConfig: PropTypes.shape({
    upClick: PropTypes.func,
    downClick: PropTypes.func,
  }),
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

InputNumber.defaultProps = {
  status: 'default',
  min: 0,
  max: 1000,
  step: 1,
  arrowsConfig: {},
}

export default InputNumber
