import React from 'react'

const PowerOff = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5 1V11"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33363 3C3.97181 4.58768 1.35536 9.17965 2.13769 13.8741C2.92003 18.5686 6.87359 22 11.5 22C16.1264 22 20.08 18.5686 20.8623 13.8741C21.6446 9.17965 19.0282 4.58768 14.6664 3"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PowerOff
