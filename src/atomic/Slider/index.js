import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import { COLORS } from '../../assets/docs'

const Slider = props => {
  const { name, id, value, max, min, step, onChange, className, style } = props

  const [val, setValue] = useState(value || 0)
  const [percent, setPercent] = useState((value / max) * 100)

  const handleChange = event => {
    setValue(event.target.value)
    setPercent((event.target.value / max) * 100)

    if (onChange) {
      onChange(event)
    }
  }

  const inlineStyles = {
    background: `linear-gradient(90deg, ${COLORS.PRIMARY} ${percent}%, ${COLORS.BG_GREY_2} ${percent}%)`,
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
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
}

export default Slider
