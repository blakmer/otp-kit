import React from 'react'

const Calendar = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.8 44C4.25362 44 3 42.7257 3 41.1538V9.84615C3 8.27428 4.25362 7 5.8 7H42.2C43.7464 7 45 8.27428 45 9.84615V41.1538C45 42.7257 43.7464 44 42.2 44H5.8Z"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 17H45"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 10V4"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 10V4"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13.5 24C12.6716 24 12 24.6716 12 25.5C12 26.3284 12.6716 27 13.5 27C14.3284 27 15 26.3284 15 25.5C15 24.6716 14.3284 24 13.5 24Z" />
      <path d="M24 24C23.1716 24 22.5 24.6716 22.5 25.5C22.5 26.3284 23.1716 27 24 27C24.8284 27 25.5 26.3284 25.5 25.5C25.5 24.6716 24.8284 24 24 24Z" />
      <path d="M34.5 24C33.6716 24 33 24.6716 33 25.5C33 26.3284 33.6716 27 34.5 27C35.3284 27 36 26.3284 36 25.5C36 24.6716 35.3284 24 34.5 24Z" />
      <path d="M13.5 34C12.6716 34 12 34.6716 12 35.5C12 36.3284 12.6716 37 13.5 37C14.3284 37 15 36.3284 15 35.5C15 34.6716 14.3284 34 13.5 34Z" />
      <path d="M24 34C23.1716 34 22.5 34.6716 22.5 35.5C22.5 36.3284 23.1716 37 24 37C24.8284 37 25.5 36.3284 25.5 35.5C25.5 34.6716 24.8284 34 24 34Z" />
      <path d="M34.5 34C33.6716 34 33 34.6716 33 35.5C33 36.3284 33.6716 37 34.5 37C35.3284 37 36 36.3284 36 35.5C36 34.6716 35.3284 34 34.5 34Z" />
    </svg>
  )
}

export default Calendar
