import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

const Slider = props => {
  const {
    autoComplete,
    name,
    id,
    value,
    unit,
    max,
    min,
    step,
    onChange,
    className,
  } = props

  const [val, setValue] = useState(value || 0)

  const handleChange = event => {
    setValue(event.target.value)
    onChange(event)
  }

  return (
    <div>
      <input
        type="range"
        autoComplete={autoComplete}
        name={name}
        id={id}
        value={val}
        max={max}
        min={min}
        step={step}
        onChange={handleChange}
        className={className}
      />
      {/*      <div className={styles.range}>
        <span>{`${min} ${unit}`}</span>
        <span>{`${max} ${unit}`}</span>
      </div>*/}
    </div>
  )
}

Slider.defaultProps = {}

Slider.propTypes = {}

export default Slider
