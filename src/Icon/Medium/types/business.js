import React from 'react'

const Business = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="1"
        y="6"
        width="22"
        height="15"
        rx="1.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 12.5H10"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.75 12.5H22.75"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14C10.8954 14 10 13.403 10 12.6667V11.3333C10 10.597 10.8954 10 12 10C13.1046 10 14 10.597 14 11.3333V12.6667C14 13.403 13.1046 14 12 14Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Business
