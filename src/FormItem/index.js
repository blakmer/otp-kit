import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Typography from '../Typography'
import styles from './index.module.css'

const FormItem = props => {
  const { label, className, description, children, count, flat } = props
  const [focus, setFocus] = useState(false)
  const element = useRef(null)
  const isSimple = children ? !children.length : false

  const nonFluidComponents = ['Select', 'Multiselect', 'DropdownInput']

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
      ? nonFluidComponents.filter(e => e === children.type.name).length ||
        children.props.value ||
        children.props.defaultValue
      : true)
  ) {
    setFocus(true)
  }

  return (
    <div
      ref={element}
      className={classnames(
        styles.wrapper,
        isSimple ? !!children.props.block && styles.block : null,
        flat && styles.flat,
        className
      )}>
      <div className={classnames(styles.child)}>
        {label && (
          <span
            className={classnames(
              styles.label,
              flat ? styles.flat : styles.fluid,
              styles[isSimple ? children.props.status : null],
              !flat && focus && styles.focused
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
            styles[isSimple ? children.props.status : null],
            flat && styles.flat
          )}>
          {description}
        </Typography.Text>
      )}
    </div>
  )
}

FormItem.propTypes = {
  label: PropTypes.node,
  className: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element.isRequired,
  count: PropTypes.number,
  flat: PropTypes.bool,
}

FormItem.defaultProps = {
  flat: false,
}

export default FormItem
