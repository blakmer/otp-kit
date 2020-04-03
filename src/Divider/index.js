import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

const ORIENTATIONS = {
  left: 'left',
  center: 'center',
  right: 'right',
}

const COLORS = {
  primary: 'green',
  blue: 'blue',
  error: 'red',
  none: 'grey',
}

const Divider = props => {
  const { className, children, orientation, color, style, dashed, type } = props
  const orient = ORIENTATIONS[orientation] ? orientation : 'center'
  const colored = COLORS[color] ? color : 'grey'
  const renderHorisontal = () => {
    return (
      <div
        className={classnames(
          styles.divider,
          styles.horisontal,
          children ? styles[orient] : styles.empty,
          dashed && styles.dashed,
          styles[colored],
          className
        )}
        style={style}>
        {children && <span>{children}</span>}
      </div>
    )
  }
  const renderVertical = () => {
    return (
      <div
        className={classnames(styles.divider, styles.vertical, styles[colored])}
        style={style}
      />
    )
  }

  return type === 'vertical' ? renderVertical() : renderHorisontal()
}

Divider.propTypes = {
  className: PropTypes.string,
  orientation: PropTypes.oneOf(Object.keys(ORIENTATIONS)),
  color: PropTypes.oneOf(Object.keys(COLORS)),
  style: PropTypes.object,
  dashed: PropTypes.bool,
  type: PropTypes.oneOf(['horisontal', 'vertical']),
  children: PropTypes.node,
}

Divider.defaultProps = {
  orientation: 'center',
  color: 'none',
  type: 'horisontal',
}

export default Divider
