import React from 'react'

const ArrowUpBig = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23 17L12.995 7.2C12.8625 7.0714 12.6851 6.99948 12.5005 6.99948C12.3159 6.99948 12.1385 7.0714 12.006 7.2L2 17"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowUpBig
