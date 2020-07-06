import React from 'react'
import classnames from 'classnames'
import classes from '../classes.module.css'
import PropTypes from 'prop-types'

const UploadIcon = props => {
  const { className, style, fill } = props

  return (
    <svg
      className={classnames(
        classes[`${fill}-stroke`],
        classes[`${fill}-fill`],
        className
      )}
      style={style}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.118 27H12.562C12.2749 27 11.9912 27.0618 11.7301 27.1812C11.4691 27.3006 11.2368 27.4748 11.049 27.692L3 37H45L36.951 27.692C36.7632 27.4748 36.5309 27.3006 36.2699 27.1812C36.0088 27.0618 35.7251 27 35.438 27H33.882"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39 42H32"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 37V43.667C3.04692 44.5916 3.45683 45.4604 4.14066 46.0845C4.82448 46.7085 5.72696 47.0376 6.652 47H41.352C42.2764 47.0365 43.1778 46.707 43.8608 46.083C44.5437 45.459 44.9531 44.5909 45 43.667V37"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 29L24 4.00002"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M31.219 13.625C31.3852 13.8303 31.6259 13.9614 31.8886 13.9899C32.1512 14.0183 32.4143 13.9416 32.6206 13.7767C32.8269 13.6117 32.9596 13.3718 32.9896 13.1094C33.0197 12.847 32.9447 12.5833 32.781 12.376L31.219 13.625ZM15.219 12.376C15.0553 12.5833 14.9803 12.847 15.0104 13.1094C15.0404 13.3718 15.1731 13.6117 15.3794 13.7767C15.5857 13.9416 15.8489 14.0183 16.1115 13.9899C16.3741 13.9614 16.6148 13.8303 16.781 13.625L15.219 12.376ZM24 3.00002L24.781 2.37502C24.6873 2.25787 24.5685 2.16329 24.4333 2.0983C24.2981 2.0333 24.15 1.99956 24 1.99956C23.85 1.99956 23.7019 2.0333 23.5667 2.0983C23.4315 2.16329 23.3127 2.25787 23.219 2.37502L24 3.00002ZM32.781 12.375L24.781 2.37502L23.219 3.62403L31.219 13.624L32.781 12.375ZM23.219 2.37502L15.219 12.375L16.781 13.624L24.781 3.62403L23.219 2.37502Z"
        stroke="none"
      />
    </svg>
  )
}

UploadIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  fill: PropTypes.string,
}

UploadIcon.defaultProps = { fill: 'text-primary' }

export default UploadIcon
