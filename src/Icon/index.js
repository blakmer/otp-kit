import React from 'react'
import PropTypes from 'prop-types'
import ArrowRight from './types/arrow-right'
import ArrowLeft from './types/arrow-left'
import ArrowDown from './types/arrow-down'
import ArrowUp from './types/arrow-up'
import { COLORS } from '../docs'
import classnames from 'classnames'
import styles from './index.module.css'
import DatePicker from './types/datepicker'

const {
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_DISABLED,
  TEXT_INVERSE,
  PRIMARY,
  PRIMARY_HOVER,
  HIGHLIGHTED,
  ERROR,
  ERROR_HOVER,
  BLUE,
  BLUE_HOVER,
} = COLORS

const REFERENCES = {
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  datepicker: DatePicker,
}

const FILLS = {
  primary: TEXT_PRIMARY,
  secondary: TEXT_SECONDARY,
  disabled: TEXT_DISABLED,
  inverse: TEXT_INVERSE,
  green: PRIMARY,
  greenHover: PRIMARY_HOVER,
  highlighted: HIGHLIGHTED,
  danger: ERROR,
  dangerHover: ERROR_HOVER,
  blue: BLUE,
  blueHover: BLUE_HOVER,
}

const Icon = props => {
  const { type, size, fill, className } = props
  const SVG = REFERENCES[type]

  const getDigitSize = () => {
    if (size === 'small') {
      return 16
    } else if (size === 'medium') {
      return 24
    } else {
      return 16
    }
  }

  return SVG ? (
    <span className={classnames(styles[size], styles.wrapper, className)}>
      {<SVG digitSize={getDigitSize()} hexFill={FILLS[fill]} />}
    </span>
  ) : null
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium']),
  fill: PropTypes.oneOf(Object.keys(FILLS)),
}

Icon.defaultProps = {
  size: 'small',
  fill: 'primary',
}

export default Icon
