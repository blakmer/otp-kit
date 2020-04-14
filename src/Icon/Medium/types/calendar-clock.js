import React from 'react'

const CalendarClock = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          fill="none"
          d="M8 17H2.54545C1.69192 17 1 16.3284 1 15.5V3.5C1 2.67157 1.69192 2 2.54545 2H16.4545C17.3081 2 18 2.67157 18 3.5V8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill="none"
          d="M0.75 6.75H17.25"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill="none"
          d="M5 3V1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill="none"
          d="M14 3V1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill="none"
          d="M21.2426 12.7574C23.5858 15.1005 23.5858 18.8995 21.2426 21.2426C18.8995 23.5858 15.1005 23.5858 12.7574 21.2426C10.4142 18.8995 10.4142 15.1005 12.7574 12.7574C15.1005 10.4142 18.8995 10.4142 21.2426 12.7574"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill="none"
          d="M19 17H17V14"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H24V24H0V0Z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CalendarClock
