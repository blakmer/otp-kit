import React from 'react'
import PropTypes from 'prop-types'
import ArrowRight from './types/arrow-right'
import ArrowLeft from './types/arrow-left'
import ArrowDown from './types/arrow-down'
import ArrowUp from './types/arrow-up'
import { HEX_FILL } from '../../assets/docs'

const REFERENCES = {
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
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

  const getHexFill = () => {
    const { PRIMARY, SECONDARY, DISABLED, INVERSE } = HEX_FILL

    switch (fill) {
      case 'primary':
        return PRIMARY
      case 'secondary':
        return SECONDARY
      case 'disabled':
        return DISABLED
      case 'inverse':
        return INVERSE
      default:
        return PRIMARY
    }
  }

  return <SVG digitSize={getDigitSize()} hexFill={getHexFill()} />
}

Icon.propTypes = {
  type: PropTypes.string.required,
  size: PropTypes.oneOf(['small', 'medium']),
  fill: PropTypes.oneOf(['primary', 'secondary', 'disabled', 'inverse']),
}

Icon.defaultProps = {
  size: 'small',
  fill: 'primary',
}

export default Icon
