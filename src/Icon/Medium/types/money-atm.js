import React from 'react'

const MoneyAtm = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 23H6V5H18V23Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9V8.5"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19.5V19"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.2 9H1.73333V9C1.32832 9 1 8.64183 1 8.2V1.8V1.8C1 1.35817 1.32833 1 1.73333 1H22.2667V1C22.6717 1 23 1.35817 23 1.8V8.2V8.2C23 8.64183 22.6717 9 22.2667 9C22.2667 9 22.2667 9 22.2667 9H20.8"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="14" r="2" stroke="#1B1F27" strokeWidth="2" />
    </svg>
  )
}

export default MoneyAtm
