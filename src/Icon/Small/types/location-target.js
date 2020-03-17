import React from 'react'

const LocationTarget = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.41421 6.58579C10.1953 7.36683 10.1953 8.63317 9.41421 9.41421C8.63316 10.1953 7.36683 10.1953 6.58579 9.41421C5.80474 8.63317 5.80474 7.36683 6.58579 6.58579C7.36683 5.80474 8.63316 5.80474 9.41421 6.58579Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5355 4.46447C13.4882 6.41709 13.4882 9.58291 11.5355 11.5355C9.58291 13.4882 6.41708 13.4882 4.46446 11.5355C2.51185 9.58291 2.51185 6.41709 4.46446 4.46447C6.41708 2.51184 9.58291 2.51184 11.5355 4.46447"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00098 0.5V2.5"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.00098 8H3.00098"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 15V13"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.001 8H13.001"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LocationTarget
