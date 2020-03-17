import React from 'react'

const ErrorState = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.9507 3.05025C15.6844 5.78392 15.6844 10.2161 12.9507 12.9497C10.2171 15.6834 5.7849 15.6834 3.05123 12.9497C0.317559 10.2161 0.317559 5.78392 3.05123 3.05025C5.7849 0.316582 10.2171 0.316582 12.9507 3.05025"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.001 12.5L3.50098 3"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ErrorState
