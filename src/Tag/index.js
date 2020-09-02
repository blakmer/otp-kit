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
    hasMarker,
    fillHex,
    style,
    title,
    disabled,
    ghost,
  } = props

  return (
    <div
      style={{
        border:
          hasMarker && fillHex && ghost && !disabled && '2px solid ' + fillHex,
        ...style,
      }}
      className={classnames(
        styles.tag,
        !hasMarker
          ? classes[`${fill}-bg`]
          : !disabled && ghost
          ? classes[`bg-input-bg`]
          : classes[`bg-grey-3-bg`],
        hasMarker && styles.paddingNone,
        ghost && !disabled && !fillHex && classes[`${fill}-border`],
        disabled && styles.tagDisabled,
        className
      )}>
      {hasMarker || fillHex ? (
        <span
          style={{
            backgroundColor: fillHex,
            opacity: disabled && '0.5',
          }}
          className={classnames(styles.marker, classes[`${fill}-bg`])}
        />
      ) : null}
      <span
        className={classnames(styles.title, { [styles.hasMarker]: hasMarker })}>
        {title}
      </span>
      {onRemove && !disabled && (
        <Icon.Small
          type="close"
          fill={hasMarker ? 'text-secondary' : 'white'}
          className={styles.icon}
          onClick={onRemove}
        />
      )}
    </div>
  )
}

Tag.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  /** Признак наличия маркера */
  hasMarker: PropTypes.bool,
  /** Окрашивание элемента в произвольный цвет */
  fillHex: PropTypes.string,
  /** Callback, вызываемый при удалении элемента */
  onRemove: PropTypes.func,
  /** Окрашивание элемента в цвет из списка цветов */
  fill: PropTypes.string,
  disabled: PropTypes.bool,
  /** Заголовок элемента */
  title: PropTypes.string,
  /** Делает элемент прозрачным */
  ghost: PropTypes.bool,
}

Tag.defaultProps = {
  title: 'My tag',
  disabled: false,
  ghost: false,
}

export default Tag
