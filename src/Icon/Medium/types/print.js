import React from 'react'

const Print = props => {
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
        d="M4.4 17H2.46667C1.65665 17 1 16.3604 1 15.5714V8.42857C1 7.63959 1.65665 7 2.46667 7H21.5333C22.3434 7 23 7.63959 23 8.42857V15.5714C23 16.3604 22.3434 17 21.5333 17H18.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M4 9.5H5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        fill="none"
        x="5"
        y="13"
        width="13"
        height="10"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 7H5V2.5C5 1.67157 5.6467 1 6.44444 1H16.5556C17.3533 1 18 1.67157 18 2.5V7Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M8 16.5H15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M8 19.5H13"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Print
