import React from 'react'

const Transactions = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="4" width="5" height="2" rx="1" fill="#1B1F27" />
      <rect
        x="9"
        y="3"
        width="13"
        height="4"
        rx="2"
        stroke="#1B1F27"
        strokeWidth="2"
      />
      <rect
        x="9"
        y="10"
        width="13"
        height="4"
        rx="2"
        stroke="#1B1F27"
        strokeWidth="2"
      />
      <rect
        x="9"
        y="17"
        width="13"
        height="4"
        rx="2"
        stroke="#1B1F27"
        strokeWidth="2"
      />
      <rect x="1" y="18" width="5" height="2" rx="0.999999" fill="#1B1F27" />
      <rect x="1" y="11" width="5" height="2" rx="1" fill="#1B1F27" />
      <rect
        x="4.5"
        y="2.5"
        width="5"
        height="2"
        rx="1"
        transform="rotate(90 4.5 2.5)"
        fill="#1B1F27"
      />
      <rect
        x="4.5"
        y="16.5"
        width="5"
        height="2"
        rx="1"
        transform="rotate(90 4.5 16.5)"
        fill="#1B1F27"
      />
    </svg>
  )
}

export default Transactions
