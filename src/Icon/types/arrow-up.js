import React from 'react'

const ArrowUp = props => {
  const { digitSize, hexFill } = props

  return (
    <svg
      width={digitSize}
      height={digitSize}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 10L8 4L2 10"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowUp
