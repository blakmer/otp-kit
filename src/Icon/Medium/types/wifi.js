import React from 'react'

const Wifi = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.4142 17.5858C14.1953 18.3668 14.1953 19.6332 13.4142 20.4142C12.6332 21.1953 11.3668 21.1953 10.5858 20.4142C9.80474 19.6332 9.80474 18.3668 10.5858 17.5858C11.3668 16.8047 12.6332 16.8047 13.4142 17.5858"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 14C14.2385 11.3333 9.76151 11.3333 7 14"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 11C15.5816 7 8.41834 7 4 11"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 8V8C16.8037 2.66667 7.19628 2.66667 1 8"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Wifi
