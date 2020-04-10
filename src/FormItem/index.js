import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.module.css'

const FormItem = props => {
  const { label, className, block, description, children, count } = props

  const status = children[0] ? children[0].props.status : children.props.status
  const maxLength = children[0]
    ? children[0].props.maxLength
    : children.props.maxLength

  return (
    <div
      className={classnames(styles.wrapper, block && styles.block, className)}>
      <label className={classnames(styles.itemContainer, styles[status])}>
        {label && (
          <span className={classnames(styles.inputLabel, styles[status])}>
            {label}
          </span>
        )}

        <div className={classnames(styles.child)}>{children}</div>
      </label>

      {!description && count >= 0 && maxLength && (
        <small className={styles.limit}>{`${count}/${maxLength}`}</small>
      )}

      {description && (
        <p className={classnames(styles.description, styles[status])}>
          {description}
        </p>
      )}
    </div>
  )
}

FormItem.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  block: PropTypes.bool,
  description: PropTypes.string,
  children: PropTypes.node,
  count: PropTypes.number,
}

export default FormItem
