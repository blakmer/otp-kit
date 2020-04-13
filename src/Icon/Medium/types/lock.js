import React from 'react'

const Lock = props => {
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
        d="M5.45455 23C4.65123 23 4 22.3533 4 21.5556V11.4444C4 10.6467 4.65123 10 5.45455 10H18.5455C19.3488 10 20 10.6467 20 11.4444V21.5556C20 22.3533 19.3488 23 18.5455 23H5.45455Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path fill="none" d="M12 15V18" strokeWidth="2" strokeLinecap="round" />
      <path
        fill="none"
        d="M7 10V6.25V6.25C7 3.35051 9.23857 1 12 1C14.7614 1 17 3.3505 17 6.25V6.25V10"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Lock
