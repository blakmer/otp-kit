import React from 'react'

const KeyboardArrowRight = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.5 11.753H1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M19.75 15.5L23.5 11.75L19.75 8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <rect width="24.25" height="24" fill="none" />
      </defs>
    </svg>
  )
}

export default KeyboardArrowRight
