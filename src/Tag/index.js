import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import Icon from '../Icon'
import classes from '../classes.module.css'

const Tag = props => {
  const {
    className,
    onRemove,
    fill,
    fillHex,
    style,
    title,
    disabled,
    secondary,
  } = props

  return (
    <div
      style={{
        border: fillHex && secondary && !disabled && '2px solid ' + fillHex,
        ...style,
      }}
      className={classnames(
        styles.tag,
        secondary && !disabled && !fillHex && classes[`${fill}-border`],
        !disabled && secondary
          ? classes[`bg-input-bg`]
          : classes[`bg-grey-3-bg`],
        disabled && styles.tagDisabled,
        className
      )}>
      {fill || fillHex ? (
        <span
          style={{
            backgroundColor: fillHex,
            opacity: disabled && '0.5',
          }}
          className={classnames(styles.marker, classes[`${fill}-bg`])}
        />
      ) : null}
      <span className={styles.title}>{title}</span>
      {onRemove && !disabled && (
        <Icon.Small type="close" className={styles.icon} onClick={onRemove} />
      )}
    </div>
  )
}

Tag.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  fillHex: PropTypes.string,
  onRemove: PropTypes.func,
  fill: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  secondary: PropTypes.bool,
}

Tag.defaultProps = {
  title: 'My tag',
  disabled: false,
  secondary: false,
}

export default Tag
