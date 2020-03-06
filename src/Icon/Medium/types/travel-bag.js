import React from 'react'

const TravelBag = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.93333 22C2.31331 22 1 20.6568 1 19V10C1 8.34316 2.31331 7 3.93333 7H20.0667C21.6867 7 23 8.34316 23 10V19C23 20.6568 21.6867 22 20.0667 22H3.93333Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6.99902V20.999"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 6.99902V20.999"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 6V3.33333C16 2.59695 15.2837 2 14.4 2H9.6V2C8.71634 2 8 2.59695 8 3.33333V3.33333V6"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TravelBag
