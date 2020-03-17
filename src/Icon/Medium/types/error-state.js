import React from 'react'

const ErrorState = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.7782 4.22183C24.0739 8.5176 24.0739 15.4824 19.7782 19.7782C15.4824 24.0739 8.5176 24.0739 4.22183 19.7782C-0.0739423 15.4824 -0.0739423 8.5176 4.22183 4.22183C8.5176 -0.0739423 15.4824 -0.0739423 19.7782 4.22183"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 19L5 5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ErrorState
