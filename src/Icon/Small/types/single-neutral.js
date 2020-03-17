import React from 'react'

const SingleNeutral = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.41421 1.08578C10.1953 1.86683 10.1953 3.13316 9.41421 3.91421C8.63316 4.69526 7.36683 4.69526 6.58579 3.91421C5.80474 3.13316 5.80474 1.86683 6.58579 1.08578C7.36683 0.304738 8.63316 0.304738 9.41421 1.08578"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 9.375C11.5 7.51104 9.93299 6 8 6C6.06701 6 4.5 7.51104 4.5 9.375V10.8214H6L6.66667 15H9.33333L10 10.8214H11.5V9.375Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SingleNeutral
