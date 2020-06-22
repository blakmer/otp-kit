import React from 'react'

const Redo = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.25 9.754L19 6.004L15.25 2.254"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M18 6.004H13.5C11.5109 6.004 9.60322 6.79417 8.1967 8.2007C6.79018 9.60722 6 11.5149 6 13.504C6 15.4931 6.79018 17.4008 8.1967 18.8073C9.60322 20.2138 11.5109 21.004 13.5 21.004H18"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export default Redo
