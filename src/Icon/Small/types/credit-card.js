import React from 'react'

const CreditCard = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 13.5C0.94772 13.5 0.5 13.0523 0.5 12.5V3.5C0.5 2.94772 0.94772 2.5 1.5 2.5H14.5C15.0523 2.5 15.5 2.94772 15.5 3.5V12.5C15.5 13.0523 15.0523 13.5 14.5 13.5H1.5Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.5 5.5H15.5"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 8.5H9"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 10.5H7"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CreditCard
