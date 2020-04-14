import React from 'react'

const AnalyticsPie = props => {
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
        fillRule="evenodd"
        fill="none"
        clipRule="evenodd"
        d="M8.90527 1V6H13.9053C13.9053 3.23858 11.6667 1 8.90527 1Z"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="none"
        d="M6.75471 9.25V4C4.45438 4.0002 2.42167 5.49575 1.73845 7.6907C1.05523 9.88564 1.88039 12.2695 3.77476 13.5735C5.66914 14.8775 8.19215 14.7984 10.001 13.3782L6.75471 9.25Z"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="none"
        d="M14.001 8H9.00098L12.0904 12C13.2977 11.0363 14.0022 9.56121 14.001 8Z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default AnalyticsPie
