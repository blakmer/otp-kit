import React from 'react'

const ArrowLeft = props => {
  const { digitSize, hexFill } = props

  return (
    <svg
      width={digitSize}
      height={digitSize}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 2L5 8L11 14"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowLeft
