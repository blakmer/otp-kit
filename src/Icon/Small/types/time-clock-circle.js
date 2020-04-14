import React from 'react'

const TimeClockCircle = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M12.9497 3.05026C15.6834 5.78393 15.6834 10.2161 12.9497 12.9497C10.216 15.6834 5.78392 15.6834 3.05026 12.9497C0.316582 10.216 0.316582 5.78392 3.05026 3.05026C5.78393 0.316582 10.2161 0.316582 12.9497 3.05026"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M8 8V5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M8 8L11 11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TimeClockCircle
