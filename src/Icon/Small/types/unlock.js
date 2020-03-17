import React from 'react'

const Unlock = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 15C4.44772 15 4 14.5523 4 14V7C4 6.44772 4.44772 6 5 6H14C14.5523 6 15 6.44772 15 7V14C15 14.5523 14.5523 15 14 15H5Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.5 9V11" stroke={hexFill} strokeLinecap="round" />
      <path
        d="M1.5 7V4.5C1.5 2.56701 2.84314 1 4.5 1C6.15685 1 7.5 2.567 7.5 4.5V6"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Unlock
