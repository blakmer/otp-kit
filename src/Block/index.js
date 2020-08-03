import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import classes from '../classes.module.css'
import styles from './index.module.css'

const Block = props => {
  const {
    color,
    borderRadius,
    shadow,
    membrane,
    padding,
    children,
    style,
    className,
  } = props

  const strPadding =
    Array.isArray(padding) && [1, 2, 4].includes(padding.length)
      ? padding.reduce((acc, i) => {
          return typeof i === 'number' ? `${acc} ${i}px` : `${acc} ${i}`
        }, '')
      : undefined

  return (
    <div
      style={{ padding: strPadding, borderRadius, ...style }}
      className={classnames(
        classes[`${color}-bg`],
        membrane ? styles.membrane : styles[`${shadow}-shadow`],
        className
      )}>
      {children}
    </div>
  )
}

Block.propTypes = {
  color: PropTypes.string,
  borderRadius: PropTypes.oneOf([8, 16, 24, 32, 64]),
  shadow: PropTypes.oneOf(['small', 'normal', 'big']),
  membrane: PropTypes.bool,
  /** For example: [10], [10, '2rem'], [2, 5, '3em', '5%'] */
  padding: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
}

Block.defaultProps = {
  color: 'bg-input',
  block: true,
}

export default Block
