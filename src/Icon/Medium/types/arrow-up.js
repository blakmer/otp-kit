import React from 'react'

const ArrowUp = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 15L11.7173 9.12053C11.7923 9.04336 11.894 9 12 9C12.106 9 12.2077 9.04336 12.2827 9.12053L18 15"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowUp
