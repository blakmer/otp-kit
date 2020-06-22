import React from 'react'
import classes from '../classes.module.css'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ArrowUp = ({ className, fill, onClick }) => {
  return (
    <svg
      className={classnames(classes[`${fill}-stroke`], className)}
      onClick={onClick}
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 10L8 4L2 10"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

ArrowUp.defaultProps = {
  fill: 'text-primary',
}

ArrowUp.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
}

export default ArrowUp
