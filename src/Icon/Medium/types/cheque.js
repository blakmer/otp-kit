import React from 'react'

const Cheque = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.46667 20C1.65666 20 1 19.3488 1 18.5455V5.45455C1 4.65123 1.65666 4 2.46667 4H21.5333C22.3433 4 23 4.65123 23 5.45455V18.5455C23 19.3488 22.3433 20 21.5333 20H2.46667Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66667 10C4.29848 10 4 9.87789 4 9.72727V7.27273C4 7.12211 4.29848 7 4.66667 7H13.3333C13.7015 7 14 7.12211 14 7.27273V9.72727C14 9.87789 13.7015 10 13.3333 10H4.66667Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 7H20"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 10H20"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 13H20"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 14H12"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17H9"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Cheque
