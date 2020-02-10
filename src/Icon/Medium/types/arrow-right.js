import React from 'react'

const ArrowRight = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 6L14.8795 11.7173C14.9566 11.7923 15 11.894 15 12C15 12.106 14.9566 12.2077 14.8795 12.2827L9 18"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowRight
