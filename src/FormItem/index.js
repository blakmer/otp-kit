import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Typography from '../Typography'
import styles from './index.module.css'

const FormItem = props => {
  const { label, className, block, description, children, count } = props
  const [focus, setFocus] = useState(false)
  const element = useRef(null)
  const isSimple = children ? !children.length : false

  useEffect(() => {
    const el =
      element.current.querySelector('textarea') ||
      element.current.querySelector('input')
    if (el) {
      el.addEventListener('change', e => {
        if (e.target.value && !focus) {
          setFocus(true)
        }
        if (!e.target.value) {
          setFocus(false)
        }
      })
    }
  }, [])

  if (
    !focus &&
    (isSimple
      ? children.type.name === 'Select' ||
        children.props.value ||
        children.props.defaultValue
      : true)
  ) {
    setFocus(true)
  }

  return (
    <div
      ref={element}
      className={classnames(styles.wrapper, block && styles.block, className)}>
      <div className={classnames(styles.child)}>
        {label && (
          <span
            className={classnames(
              styles.label,
              styles[isSimple ? children.props.status : null],
              focus && styles.focused
            )}>
            {label}
          </span>
        )}
        {children}
      </div>
      {!description &&
        count >= 0 &&
        (isSimple ? !!children.props.maxLength : null) && (
          <small
            className={
              styles.limit
            }>{`${count}/${children.props.maxLength}`}</small>
        )}

      {description && (
        <Typography.Text
          className={classnames(
            styles.description,
            styles[isSimple ? children.props.status : null]
          )}>
          {description}
        </Typography.Text>
      )}
    </div>
  )
}

FormItem.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  block: PropTypes.bool,
  description: PropTypes.string,
  children: PropTypes.element.isRequired,
  count: PropTypes.number,
}

export default FormItem
