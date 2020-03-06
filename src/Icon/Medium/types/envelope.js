import React from 'react'

const Envelope = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.46667 19C1.65666 19 1 18.3284 1 17.5V5.5C1 4.67158 1.65666 4 2.46667 4H21.5333C22.3433 4 23 4.67158 23 5.5V17.5C23 18.3284 22.3433 19 21.5333 19H2.46667Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 10L20 14"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10L4 14"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 5L13.247 11.5731C12.4242 12.1423 11.3358 12.1423 10.513 11.5731L2 5"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Envelope
