import React from 'react'

const Hamburger = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path fill="none" d="M1 5H23" strokeWidth="2" strokeLinecap="round" />
      <path fill="none" d="M1 12H23" strokeWidth="2" strokeLinecap="round" />
      <path fill="none" d="M1 19H14.2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default Hamburger
