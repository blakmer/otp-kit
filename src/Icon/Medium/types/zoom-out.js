import React from 'react'

const ZoomOut = props => {
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
          d="M19 9.99901V10C19 14.9706 14.9706 19 10 19C5.02943 19 1 14.9706 1 10C1 5.02943 5.02943 1 10 1C10.0003 1 10.0007 1 10.001 1V1C14.9708 1.00055 18.9995 5.02922 19 9.99901V9.99901Z"
          stroke="#1B1F27"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 10H15"
          stroke="#1B1F27"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 16.5L23.03 23.03"
          stroke="#1B1F27"
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

export default ZoomOut
