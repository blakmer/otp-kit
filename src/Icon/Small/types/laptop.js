import React from 'react'

const Laptop = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M2 10V3.9375C2 3.41973 2.41328 3 2.92308 3H13.0769C13.5867 3 14 3.41973 14 3.9375V10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.60782 10C9.27815 10.6182 8.66456 10.9998 8 10.9998C7.33544 10.9998 6.72185 10.6182 6.39218 10H1V11C1 12.1046 1.83574 13 2.86667 13H13.1333C14.1643 13 15 12.1046 15 11V10H9.60782Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Laptop
