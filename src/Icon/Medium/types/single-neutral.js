import React from 'react'

const SingleNeutral = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.1213 1.87868C15.2929 3.05025 15.2929 4.94975 14.1213 6.12132C12.9497 7.29289 11.0502 7.29289 9.87868 6.12132C8.70711 4.94975 8.70711 3.05025 9.87868 1.87868C11.0502 0.707108 12.9497 0.707108 14.1213 1.87868"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.25 14.25C17.25 11.3505 14.8995 9 12 9C9.10051 9 6.75 11.3505 6.75 14.25V16.5H9L10 23H14L15 16.5H17.25V14.25Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SingleNeutral
