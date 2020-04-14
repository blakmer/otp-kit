import React from 'react'

const Restaurant = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M6.25 1V23.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M9.25 1V7.75C9.24506 9.4048 7.9048 10.7451 6.25 10.75V10.75C4.5952 10.7451 3.25494 9.4048 3.25 7.75V1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M15.25 16H18.25C18.6524 16.0153 19.0429 15.8622 19.3275 15.5775C19.6122 15.2928 19.7653 14.9023 19.75 14.5C19.589 10.192 19.415 5.67999 16.637 1.34299C16.4542 1.06439 16.1104 0.938393 15.7908 1.0328C15.4712 1.1272 15.2512 1.41975 15.249 1.75299V23.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Restaurant
