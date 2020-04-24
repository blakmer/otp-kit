import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import classes from '../classes.module.css'
import Typography from '../Typography'

const ORIENTATIONS = {
  left: 'left',
  center: 'center',
  right: 'right',
}

const Divider = props => {
  const {
    className,
    children,
    orientation,
    fill,
    style,
    dashed,
    type,
    childFill,
  } = props
  const orient = ORIENTATIONS[orientation] ? orientation : 'center'
  const renderHorisontal = () => {
    return (
      <div
        className={classnames(
          styles.divider,
          styles.horisontal,
          children ? styles[orient] : styles.empty,
          dashed && styles.dashed,
          classes[`${fill}-border-before`],
          classes[`${fill}-border-after`],
          className
        )}
        style={style}>
        {children && (
          <Typography.Text fill={childFill}>{children}</Typography.Text>
        )}
      </div>
    )
  }
  const renderVertical = () => {
    return (
      <div
        className={classnames(
          styles.divider,
          styles.vertical,
          classes[`${fill}-border-before`]
        )}
        style={style}
      />
    )
  }

  return type === 'vertical' ? renderVertical() : renderHorisontal()
}

Divider.propTypes = {
  className: PropTypes.string,
  orientation: PropTypes.oneOf(Object.keys(ORIENTATIONS)),
  fill: PropTypes.string,
  style: PropTypes.object,
  dashed: PropTypes.bool,
  type: PropTypes.oneOf(['horisontal', 'vertical']),
  children: PropTypes.node,
  childFill: PropTypes.string,
}

Divider.defaultProps = {
  orientation: 'center',
  fill: 'bg-grey-2',
  childFill: 'text-secondary',
  type: 'horisontal',
}

export default Divider
