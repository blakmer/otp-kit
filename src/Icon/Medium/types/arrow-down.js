import React from 'react'

const ArrowDown = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M18 9L12.2827 14.8795C12.2077 14.9566 12.106 15 12 15C11.894 15 11.7923 14.9566 11.7173 14.8795L6 9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowDown
