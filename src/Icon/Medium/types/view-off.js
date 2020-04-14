import React from 'react'

const ViewOff = props => {
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
        d="M14 6.17799C13.3343 6.05386 12.6645 5.99086 11.9985 6.00107C8.05706 5.94063 3.98066 8.44473 1.41787 11.0093C0.86071 11.5716 0.86071 12.4257 1.41787 12.988C2.1019 13.673 2.90189 14.3617 3.78506 15L4 15.1503M20 8.84818C20.9615 9.52234 21.8358 10.2633 22.5821 11.0093C23.1393 11.5716 23.1393 12.4257 22.5821 12.988C20.0731 15.4984 16.0075 18.0603 11.9985 17.9989C11.3314 18.0091 10.6628 17.9467 10 17.8239"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M14.9529 12.5299C14.7315 13.772 13.7458 14.7495 12.4995 14.9585M9.04102 11.5C9.25178 10.2438 10.2433 9.25227 11.4995 9.0415"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M2 21L22 3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ViewOff
