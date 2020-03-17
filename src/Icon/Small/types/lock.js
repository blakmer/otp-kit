import React from 'react'

const Lock = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.00098 15C2.4487 15 2.00098 14.5523 2.00098 14V7C2.00098 6.44772 2.4487 6 3.00098 6H12.001C12.5533 6 13.001 6.44772 13.001 7V14C13.001 14.5523 12.5533 15 12.001 15H3.00098Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.50098 9V11" stroke={hexFill} strokeLinecap="round" />
      <path
        d="M4.50098 6V4.5C4.50098 2.56701 5.84412 1 7.50098 1C9.15783 1 10.501 2.567 10.501 4.5V6"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Lock
