import React from 'react'

const TickInCircle = props => {
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
        d="M12.9497 3.05026C15.6834 5.78394 15.6834 10.2161 12.9497 12.9497C10.2161 15.6834 5.78393 15.6834 3.05026 12.9497C0.316581 10.2161 0.316581 5.78393 3.05026 3.05026C5.78394 0.316581 10.2161 0.316581 12.9497 3.05026"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M4.5 8.21429L7.04545 10.5L11.5 6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TickInCircle
