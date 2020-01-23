import React from 'react'
import PropTypes from 'prop-types'
import ArrowRight from './types/arrow-right'
import ArrowLeft from './types/arrow-left'
import ArrowDown from './types/arrow-down'
import ArrowUp from './types/arrow-up'
import { COLORS } from '../../assets/docs'
import classnames from 'classnames'
import styles from './index.module.css'

const {
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_DISABLED,
  TEXT_INVERSE,
  PRIMARY,
  HIGHLIGHTED,
} = COLORS

const REFERENCES = {
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
}

const FILLS = {
  primary: TEXT_PRIMARY,
  secondary: TEXT_SECONDARY,
  disabled: TEXT_DISABLED,
  inverse: TEXT_INVERSE,
  green: PRIMARY,
  highlighted: HIGHLIGHTED,
}

const Icon = props => {
  const { type, size, fill } = props
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

  return (
    <span className={classnames(styles[size], styles.wrapper)}>
      <SVG digitSize={getDigitSize()} hexFill={FILLS[fill]} />
    </span>
  )
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
