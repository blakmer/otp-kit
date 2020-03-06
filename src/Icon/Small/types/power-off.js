import React from 'react'

const PowerOff = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0.5V7"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.00056 3C3.24547 4.00275 1.59282 6.90294 2.08697 9.86786C2.58112 12.8328 5.07835 15 8.00056 15C10.9228 15 13.42 12.8328 13.9142 9.86786C14.4083 6.90294 12.7557 4.00275 10.0006 3"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PowerOff
