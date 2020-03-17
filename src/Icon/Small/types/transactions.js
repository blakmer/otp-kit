import React from 'react'

const Transactions = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="1.00098" y="3" width="3" height="1" rx="0.5" fill={hexFill} />
      <rect x="5.50098" y="2" width="9" height="3" rx="1.5" stroke={hexFill} />
      <rect
        x="5.50098"
        y="6.5"
        width="9"
        height="3"
        rx="1.5"
        stroke={hexFill}
      />
      <rect x="5.50098" y="11" width="9" height="3" rx="1.5" stroke={hexFill} />
      <rect x="1.00098" y="12" width="3" height="1" rx="0.5" fill={hexFill} />
      <rect x="1.00098" y="7.5" width="3" height="1" rx="0.5" fill={hexFill} />
      <rect
        x="3.00098"
        y="2"
        width="3"
        height="1"
        rx="0.5"
        transform="rotate(90 3.00098 2)"
        fill={hexFill}
      />
      <rect
        x="3.00195"
        y="11"
        width="3"
        height="1"
        rx="0.5"
        transform="rotate(90 3.00195 11)"
        fill={hexFill}
      />
    </svg>
  )
}

export default Transactions
