import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

const RadioGroup = props => {
  const { name, data, direction } = props

  return (
    <div
      className={classnames({
        [styles.groupRow]: direction === 'row',
        [styles.groupColumn]: direction === 'column',
      })}>
      {data.map(
        ({
          label,
          value,
          ref,
          defaultChecked,
          checked,
          disabled,
          onBlur,
          onChange,
          onFocus,
          onKeyDown,
          onKeyPress,
          onKeyUp,
          onMouseEnter,
          onMouseLeave,
        }) => {
          return (
            <div
              className={classnames({
                [styles.radioRow]: direction === 'row',
                [styles.radioColumn]: direction === 'column',
              })}
              key={value}>
              <label
                className={classnames(styles.label, {
                  [styles.labelDisabled]: disabled,
                })}>
                <input
                  type="radio"
                  className={styles.radio}
                  name={name}
                  value={value}
                  ref={ref}
                  defaultChecked={defaultChecked}
                  checked={checked}
                  disabled={disabled}
                  onBlur={onBlur}
                  onChange={onChange}
                  onFocus={onFocus}
                  onKeyDown={onKeyDown}
                  onKeyPress={onKeyPress}
                  onKeyUp={onKeyUp}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                />
                <span>{label}</span>
              </label>
            </div>
          )
        }
      )}
    </div>
  )
}

RadioGroup.propTypes = {
  direction: PropTypes.string,
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      defaultChecked: PropTypes.bool,
      disabled: PropTypes.bool,
      ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
      onBlur: PropTypes.func,
      onChange: PropTypes.func,
      onFocus: PropTypes.func,
      onKeyDown: PropTypes.func,
      onKeyPress: PropTypes.func,
      onKeyUp: PropTypes.func,
      onMouseEnter: PropTypes.func,
      onMouseLeave: PropTypes.func,
    })
  ).isRequired,
}

RadioGroup.defaultProps = {
  direction: 'row',
}

export default RadioGroup
