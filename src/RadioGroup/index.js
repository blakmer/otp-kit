import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

const RadioGroup = props => {
  const { className, style, name, data, direction, onChange } = props

  return (
    <div
      className={classnames({
        [styles.groupRow]: direction === 'row',
        [styles.groupColumn]: direction === 'column',
        className,
      })}
      style={style}>
      {data.map(
        ({
          label,
          value,
          ref,
          defaultChecked,
          checked,
          disabled,
          onBlur,
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
  className: PropTypes.string,
  style: PropTypes.object,
  /** Направление расположеия элементов внутри */
  direction: PropTypes.string,
  name: PropTypes.string.isRequired,
  /** Callback, который срабатывает при смене активного дочернего элемента. Принимает на вход event: Event */
  onChange: PropTypes.func,
  /** Массив элементов RadioButton */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      /** Установка значения */
      value: PropTypes.string.isRequired,
      /** Установка значения по умолчанию */
      defaultChecked: PropTypes.bool,
      disabled: PropTypes.bool,
      /** Ссылка на элемент */
      ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
      onBlur: PropTypes.func,
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
