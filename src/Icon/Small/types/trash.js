import React from 'react'

const Trash = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.8889 14H4.11111V14C3.49746 14 3 13.5075 3 12.9V3H13V12.9C13 13.5075 12.5025 14 11.8889 14V14Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10V6"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10V6"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 3H15"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.83333 1H6.58333V1C5.98503 1 5.5 1.44772 5.5 2V2V3H10.9167V2V2C10.9167 1.44772 10.4316 1 9.83333 1V1V1Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Trash
