import React from 'react'

const Computer = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 21.3754H17"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 15.1252H21"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6 3.00031H5.4C4.07452 3.00031 3 4.11959 3 5.50031V15.5003C3 16.881 4.07452 18.0003 5.4 18.0003H18.6C19.9255 18.0003 21 16.881 21 15.5003V5.50031C21 4.11959 19.9255 3.00031 18.6 3.00031Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12.167"
        y1="17.8336"
        x2="12.167"
        y2="21.1669"
        stroke={hexFill}
        strokeWidth="2"
      />
    </svg>
  )
}

export default Computer
