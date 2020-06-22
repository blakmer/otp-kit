import React from 'react'

const Undo = props => {
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
        d="M9.75 9.754L6 6.002L9.75 2.254"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M7 6.004H11.5C13.4891 6.004 15.3968 6.79417 16.8033 8.2007C18.2098 9.60722 19 11.5149 19 13.504C19 15.4931 18.2098 17.4008 16.8033 18.8073C15.3968 20.2138 13.4891 21.004 11.5 21.004H7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export default Undo
