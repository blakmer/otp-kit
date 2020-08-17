import React from 'react'

const AddNewApplication = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M42 16V5.08C42 3.38 40.72 2 39.14 2H4.86C3.28 2 2 3.38 2 5.08V36.92C2 38.62 3.28 40 4.86 40H16"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M2 12H42"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M34 46C40.62 46 46 40.62 46 34C46 27.38 40.62 22 34 22C27.38 22 22 27.38 22 34C22 40.62 27.38 46 34 46Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M34 28V40"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M28 34H40"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default AddNewApplication
