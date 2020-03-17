import React from 'react'

const Filter = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7492 17.5V12L22.429 4.32017C22.985 3.76387 23.1512 2.92753 22.8503 2.2009C22.5494 1.47428 21.8405 1.00036 21.054 1H2.94434C2.15787 1.00036 1.449 1.47428 1.14807 2.2009C0.847152 2.92753 1.0134 3.76387 1.56934 4.32017L9.24918 12V23L14.7492 17.5Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Filter
