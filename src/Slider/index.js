import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'

const Slider = props => {
  const { name, id, value, max, min, step, onChange, className, style } = props

  const [val, setValue] = useState(value || 0)
  const [percent, setPercent] = useState((value / max) * 100)

  const handleChange = event => {
    setValue(event.target.value)
    setPercent((event.target.value / max) * 100)

    onChange(event)
  }

  const inlineStyles = {
    background: `linear-gradient(90deg, var(--color-primary) ${percent}%, var(--color-bg-grey-2) ${percent}%)`,
  }

  return (
    <div className={className} style={style}>
      <input
        type="range"
        style={{ ...inlineStyles }}
        name={name}
        id={id}
        value={val}
        max={max}
        min={min}
        step={step}
        onChange={handleChange}
        className={styles.slider}
      />
    </div>
  )
}

Slider.propTypes = {
  name: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Установка значения */
  value: PropTypes.number.isRequired,
  /** Максимальное значение */
  max: PropTypes.number.isRequired,
  /** Минимальное значение */
  min: PropTypes.number.isRequired,
  /** Шаг */
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
}

Slider.defaultProps = {
  onChange: e => {},
}

export default Slider
