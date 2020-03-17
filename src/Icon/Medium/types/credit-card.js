import React from 'react'

const CreditCard = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M2.25 20.25C1.42158 20.25 0.75 19.5784 0.75 18.75V5.25C0.75 4.42158 1.42158 3.75 2.25 3.75H21.75C22.5784 3.75 23.25 4.42158 23.25 5.25V18.75C23.25 19.5784 22.5784 20.25 21.75 20.25H2.25Z"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.75 8.25H23.25"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.25 12.75H13.5"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.25 15.75H10.5"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H24V24H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CreditCard
