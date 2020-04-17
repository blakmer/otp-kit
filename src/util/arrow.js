import React from 'react'
import classes from '../classes.css'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Arrow = ({ className, fill }) => {
  return (
    <svg
      className={classnames(classes[`${fill}-fill`], className)}
      width="24"
      height="12"
      viewBox="0 0 24 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.317 10.0295C14.0814 11.1351 13.1305 12 12 12C10.8695 12 9.91856 11.1351 9.683 10.0295C8.95754 6.62438 6.68689 0 0 0H24C17.3131 0 15.0425 6.62438 14.317 10.0295Z"
      />
    </svg>
  )
}

Arrow.defaultProps = {
  fill: 'text-primary',
}

Arrow.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
}

export default Arrow
