import React from 'react'

const Letter = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.6499 13.0099L16.9999 23.9999H31.9999L45.4899 12.9199"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 33.0001L16.84 24.3201"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 24.3201L40 33.0001"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.77 37.89C2.69 37.89 1 36.17 1 34.05V14.84C1 12.72 2.69 11 4.77 11H43.23C45.31 11 47 12.72 47 14.84L47.08 34.07C47.08 36.19 45.39 37.91 43.31 37.91L4.77 37.89Z"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Letter
