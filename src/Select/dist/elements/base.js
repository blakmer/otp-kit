import React from 'react'
import classnames from 'classnames'
import ArrowUp from '../../../util/arrow-up'
import ArrowDown from '../../../util/arrow-down'
import InputWithMask from '../../../InputWithMask'
import styles from '../../index.module.css'
import Chips from './chips'
import Menu from './menu'
import { statuses, statusFills, getSelectedStatus } from '../utils'

const Base = ({ simpleProps, multiProps, ...props }) => {
  const {
    className,
    style,
    value,
    onChange,
    status,
    block,
    placeholder,
    isSearchInputChange,
    itemToString,
    multi,
    multiChips,
    maskProps,
  } = props
  const {
    isOpen,
    getComboboxProps,
    getToggleButtonProps,
    getInputProps,
  } = simpleProps
  const { getDropdownProps } = multiProps || {}
  const toggleButtonProps = getToggleButtonProps()
  const inputProps = multi
    ? getInputProps(getDropdownProps({ preventKeyAction: isOpen }))
    : getInputProps({ refKey: 'ref' })
  return (
    <div
      className={classnames(styles.container, block && styles.block, className)}
      style={style}
      {...getComboboxProps()}>
      <div
        className={classnames(
          styles.labelContainer,
          block && styles.block,
          styles[statuses[status]],
          isOpen && styles.opened,
          multi && styles.multi
        )}
        {...(status === statuses.disabled ? {} : toggleButtonProps)}
        onClick={!isSearchInputChange ? toggleButtonProps.onClick : e => {}}>
        {multi &&
          (multiChips ? (
            <Chips multiProps={multiProps} onChange={onChange} value={value} />
          ) : (
            <span className={classnames(styles.flexed, styles.inside)}>
              {getSelectedStatus(multiProps, itemToString)}
            </span>
          ))}
        <InputWithMask
          simple
          className={classnames(
            styles.flexed,
            styles.inside,
            isSearchInputChange && styles.onTop
          )}
          placeholder={placeholder}
          inputProps={{
            ...inputProps,
            defaultValue: undefined,
          }}
          readOnly={!isSearchInputChange}
          inputRef={inputProps.ref}
          value={inputProps.value || ''}
          defaultValue={undefined}
          onBlur={inputProps.onBlur}
          onAccept={value =>
            isOpen && inputProps.onChange({ target: { value } })
          }
          {...maskProps}
        />
        {!isSearchInputChange ? (
          isOpen ? (
            <ArrowUp className={styles.arrowIcon} fill={statusFills[status]} />
          ) : (
            <ArrowDown
              className={styles.arrowIcon}
              fill={statusFills[status]}
            />
          )
        ) : null}
      </div>
      <Menu {...{ simpleProps, multiProps, ...props }} />
    </div>
  )
}

export default Base
