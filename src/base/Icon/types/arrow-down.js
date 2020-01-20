import React from 'react'

const ArrowDown = props => {
  const { digitSize, hexFill } = props

  return (
    <svg
      width={digitSize}
      height={digitSize}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 6L8 12L14 6"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowDown
