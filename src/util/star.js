import React from 'react'
import classes from '../classes.module.css'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Star = ({ className, fill, onClick }) => {
  return (
    <span
      className={classnames(classes[`${fill}-text`], className)}
      onClick={onClick}>
      *
    </span>
  )
}

Star.defaultProps = {
  fill: 'error',
}

Star.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
}

export default Star
