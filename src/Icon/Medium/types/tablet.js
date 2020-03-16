import React from 'react'

const Tablet = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 5V19.6667"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 18.3364L2 6.33639C2 5.60001 2.59695 5.00305 3.33333 5.00305L20.6667 5.00305C21.403 5.00305 22 5.60001 22 6.33639V18.3364C22 19.0728 21.403 19.6697 20.6667 19.6697H3.33333C2.59695 19.6697 2 19.0728 2 18.3364Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Tablet
