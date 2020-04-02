import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import RoundButton from '../RoundButton'
import styles from './index.module.css'

const PlayPauseButton = props => {
  const { className, isPlay, onChange, disabled } = props
  return (
    <RoundButton
      className={classnames(
        styles.playpause,
        isPlay ? styles.pause : styles.play,
        !disabled && styles.primarycircle,
        className
      )}
      inverse={isPlay}
      icon={isPlay ? 'pause' : 'play'}
      onClick={onChange}
      disabled={disabled}
    />
  )
}

PlayPauseButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  isPlay: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}

PlayPauseButton.defaultProps = {
  isPlay: false,
}

export default PlayPauseButton
