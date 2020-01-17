import React from 'react'
import PropTypes from 'prop-types'
import ArrowRight from './types/arrow-right'
import ArrowLeft from './types/arrow-left'
import ArrowDown from './types/arrow-down'
import ArrowUp from './types/arrow-up'

const references = {
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
}

const Icon = props => {
  const { type, size, fill } = props
  const SVG = references[type]

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
    switch (fill) {
      case 'primary':
        return '#1b1f27'
      case 'secondary':
        return '#6e7482'
      case 'disabled':
        return '#ababab'
      case 'inverse':
        return '#ffffff'
      default:
        return '#1b1f27'
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
