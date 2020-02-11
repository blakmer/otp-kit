import React from 'react'

const Hamburger = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 5H23"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1 12H23"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1 19H14.2"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Hamburger
