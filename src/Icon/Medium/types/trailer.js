import React from 'react'

const Trailer = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 22.5C9.65685 22.5 11 21.1569 11 19.5C11 17.8431 9.65685 16.5 8 16.5C6.34315 16.5 5 17.8431 5 19.5C5 21.1569 6.34315 22.5 8 22.5Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 19.5H3.5C2.67157 19.5 2 18.8284 2 18V4.5C2 3.67157 2.67157 3 3.5 3H14C17.3137 3 20 5.68629 20 9V19.5H11"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 19.5H19"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="14"
        y="10.5"
        width="9"
        height="4.5"
        rx="1"
        transform="rotate(-180 14 10.5)"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 6V10.5"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Trailer
