import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import Icon from '../Icon'

const Tag = props => {
  const {
    className,
    onRemove,
    marker,
    markerHEX,
    style,
    title,
    disabled,
    secondary,
  } = props

  return (
    <div
      style={{
        border: secondary && !disabled && '2px solid ' + markerHEX,
        ...style,
      }}
      className={classnames(styles.tag, className, {
        [styles.tagDisabled]: disabled,
        [styles.tagSecondary]: secondary && !disabled,
        [styles.tagSecondaryGreen]:
          secondary && marker === 'green' && !disabled,
        [styles.tagSecondaryPurple]:
          secondary && marker === 'purple' && !disabled,
        [styles.tagSecondaryOrange]:
          secondary && marker === 'orange' && !disabled,
        [styles.tagSecondaryBlue]: secondary && marker === 'blue' && !disabled,
        [styles.tagSecondaryRed]: secondary && marker === 'red' && !disabled,
        [styles.tagSecondaryYellow]:
          secondary && marker === 'yellow' && !disabled,
      })}>
      {marker || markerHEX ? (
        <span
          style={{
            backgroundColor: markerHEX,
            opacity: disabled && markerHEX && '0.5',
          }}
          className={classnames(styles.marker, {
            [styles.markerGreen]: marker === 'green' && !disabled,
            [styles.markerPurple]: marker === 'purple' && !disabled,
            [styles.markerOrange]: marker === 'orange' && !disabled,
            [styles.markerBlue]: marker === 'blue' && !disabled,
            [styles.markerRed]: marker === 'red' && !disabled,
            [styles.markerYellow]: marker === 'yellow' && !disabled,

            [styles.markerGreenDisabled]: marker === 'green' && disabled,
            [styles.markerPurpleDisabled]: marker === 'purple' && disabled,
            [styles.markerOrangeDisabled]: marker === 'orange' && disabled,
            [styles.markerBlueDisabled]: marker === 'blue' && disabled,
            [styles.markerRedDisabled]: marker === 'red' && disabled,
            [styles.markerYellowDisabled]: marker === 'yellow' && disabled,
          })}
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
  markerHEX: PropTypes.string,
  onRemove: PropTypes.func,
  marker: PropTypes.oneOf([
    'green',
    'purple',
    'orange',
    'blue',
    'red',
    'yellow',
  ]),
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
