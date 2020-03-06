import React from 'react'

const Unlock = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 10V6.25V6.25C1 3.35051 3.23857 1 6 1C8.76142 1 11 3.3505 11 6.25V6.25V10"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.45455 23C7.65123 23 7 22.3533 7 21.5556V11.4444C7 10.6467 7.65123 10 8.45455 10H21.5455C22.3488 10 23 10.6467 23 11.4444V21.5556C23 22.3533 22.3488 23 21.5455 23H8.45455Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 15V18"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Unlock
