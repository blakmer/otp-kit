import React from 'react'

const TickInCircle = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.9497 3.05026C15.6834 5.78394 15.6834 10.2161 12.9497 12.9497C10.2161 15.6834 5.78393 15.6834 3.05026 12.9497C0.316581 10.2161 0.316581 5.78393 3.05026 3.05026C5.78394 0.316581 10.2161 0.316581 12.9497 3.05026"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 8.21429L7.04545 10.5L11.5 6.5"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TickInCircle
