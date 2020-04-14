import React from 'react'

const TryAgain = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M5.5 14.498V18.998H1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M5.21699 19.001C2.02847 15.6677 1.61127 10.5563 4.21704 6.74998C6.8228 2.94368 11.7389 1.48343 16 3.25002"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M5.21157 18.996C1.76855 15.3975 1.60242 9.77887 4.82681 5.98327C8.0512 2.18766 13.6228 1.44325 17.7306 4.25921C21.8383 7.07517 23.1531 12.5404 20.7756 16.9165C18.398 21.2926 13.0975 23.1638 8.49957 21.25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TryAgain
