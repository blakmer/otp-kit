import React from 'react'

const HouseChimney = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M2.33398 9V14.5H6.33398V10.5V10.5C6.33398 9.94772 6.7817 9.5 7.33398 9.5H8.33398V9.5C8.88627 9.5 9.33398 9.94772 9.33398 10.5V14.5H13.334V9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M1 7L7.34045 1.24793V1.24793C7.70491 0.917356 8.29571 0.917356 8.66018 1.24793L15 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M11.3359 3.5V2H13.8359V5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default HouseChimney
