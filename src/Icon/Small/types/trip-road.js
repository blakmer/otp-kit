import React from 'react'

const TripRoad = props => {
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
        d="M8.00098 0.5C9.65783 0.5 11.001 1.85145 11.001 3.51854C11.001 4.80713 9.20898 7.25953 8.39498 8.30663C8.22496 8.52557 7.91074 8.56439 7.69314 8.39332C7.66101 8.36807 7.63208 8.33895 7.60698 8.30663C6.79298 7.25886 5.00098 4.80713 5.00098 3.51854C5.00098 1.85145 6.34413 0.5 8.00098 0.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M0.500977 15L3.50098 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M15 15L12 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M8 15V14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M8.00098 12V11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="3.5" r="0.5" stroke="none" />
    </svg>
  )
}

export default TripRoad
