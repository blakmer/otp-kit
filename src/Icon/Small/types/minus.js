import React from 'react'

const Minus = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        stroke="none"
        x="1.5"
        y="9"
        width="1"
        height="13"
        rx="0.5"
        transform="rotate(-90 1.5 9)"
      />
    </svg>
  )
}

export default Minus
