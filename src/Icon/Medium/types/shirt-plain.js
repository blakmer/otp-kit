import React from 'react'

const ShirtPlain = props => {
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
        fill="none"
        d="M6 7V21.25C6 21.6642 6.33579 22 6.75 22H17.25C17.6642 22 18 21.6642 18 21.25V7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M18.7143 13H21.2857C21.6802 13 22 12.6642 22 12.25V7C22 3.68629 19.4416 1 16.2857 1H14.8571C14.8571 2.65685 13.578 4 12 4C10.422 4 9.14286 2.65685 9.14286 1H7.71429C4.55837 1 2 3.68629 2 7V12.25C2 12.6642 2.3198 13 2.71429 13H5.28571"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ShirtPlain
