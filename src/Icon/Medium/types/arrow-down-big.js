import React from 'react'

const ArrowDownBig = props => {
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
        d="M2 9L12.005 18.8C12.1375 18.9286 12.3149 19.0005 12.4995 19.0005C12.6841 19.0005 12.8615 18.9286 12.994 18.8L23 9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export default ArrowDownBig
