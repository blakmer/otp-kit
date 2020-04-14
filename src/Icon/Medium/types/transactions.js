import React from 'react'

const Transactions = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="4" width="5" height="2" rx="1" stroke="none" />
      <rect
        x="9"
        y="3"
        width="13"
        height="4"
        rx="2"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="9"
        y="10"
        width="13"
        height="4"
        rx="2"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="9"
        y="17"
        width="13"
        height="4"
        rx="2"
        strokeWidth="2"
        fill="none"
      />
      <rect x="1" y="18" width="5" height="2" rx="0.999999" stroke="none" />
      <rect x="1" y="11" width="5" height="2" rx="1" stroke="none" />
      <rect
        x="4.5"
        y="2.5"
        width="5"
        height="2"
        rx="1"
        transform="rotate(90 4.5 2.5)"
        stroke="none"
      />
      <rect
        x="4.5"
        y="16.5"
        width="5"
        height="2"
        rx="1"
        transform="rotate(90 4.5 16.5)"
        stroke="none"
      />
    </svg>
  )
}

export default Transactions
