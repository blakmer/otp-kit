import React from 'react'

const PinLocation = props => {
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
        d="M9.41421 3.58579C10.1953 4.36683 10.1953 5.63316 9.41421 6.41421C8.63316 7.19526 7.36683 7.19526 6.58579 6.41421C5.80474 5.63316 5.80474 4.36683 6.58579 3.58579C7.36683 2.80474 8.63316 2.80474 9.41421 3.58579Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M8 0.5V0.5C10.4853 0.5 12.5 2.38477 12.5 4.70975C12.5 6.73729 9.07867 11.2751 8.20267 12.4039V12.4039C8.12057 12.5086 7.96329 12.5313 7.85136 12.4545C7.8307 12.4403 7.81248 12.4232 7.79733 12.4039C6.92133 11.2751 3.5 6.73729 3.5 4.70975V4.70975C3.5 2.38477 5.51472 0.500001 8 0.500001V0.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M11.7013 12C13.3925 12.2969 14.5 12.7925 14.5 13.3535C14.5 14.2629 11.5905 15 8 15C4.40952 15 1.5 14.2629 1.5 13.3535C1.5 12.7936 2.60252 12.2991 4.28571 12.0016"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PinLocation
