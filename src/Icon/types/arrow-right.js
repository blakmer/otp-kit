import React from 'react'

const ArrowRight = props => {
  const { digitSize, hexFill } = props

  return (
    <svg
      width={digitSize}
      height={digitSize}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 14L11 8L5 2"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowRight
