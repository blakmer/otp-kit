import React from 'react'
import classes from '../classes.module.css'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ArrowDown = ({ className, fill, onClick }) => {
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
        fill="none"
        strokeWidth="2"
        d="M2 6L8 12L14 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

ArrowDown.defaultProps = {
  fill: 'text-primary',
}

ArrowDown.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
}

export default ArrowDown
