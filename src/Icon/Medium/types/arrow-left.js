import React from 'react'

const ArrowLeft = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 18L9.12053 12.2827C9.04336 12.2077 9 12.106 9 12C9 11.894 9.04336 11.7923 9.12053 11.7173L15 6"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowLeft