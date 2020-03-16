import React from 'react'

const CalendarAdd = props => {
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
          d="M2.46667 22C1.65666 22 1 21.3801 1 20.6154V5.38462C1 4.61992 1.65666 4 2.46667 4H21.5333C22.3433 4 23 4.61992 23 5.38462V20.6154C23 21.3801 22.3433 22 21.5333 22H2.46667Z"
          stroke="#1B1F27"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.75 10H23"
          stroke="#1B1F27"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 6V2"
          stroke="#1B1F27"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 6V2"
          stroke="#1B1F27"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13H13ZM11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19H11ZM11 13V19H13V13H11Z"
          fill="#1B1F27"
        />
        <path
          d="M15 17C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15L15 17ZM9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17L9 15ZM15 15L9 15L9 17L15 17L15 15Z"
          fill="#1B1F27"
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

export default CalendarAdd
