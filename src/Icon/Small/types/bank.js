import React from 'react'

const Bank = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 14H15"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5H1L7.45933 2.11907C7.7887 1.96031 8.2113 1.96031 8.54067 2.11907L15 5Z"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2383 7V12H11.7383V7"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.18359 7V12H6.68359V7"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.13086 7V12H1.63086V7"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Bank
