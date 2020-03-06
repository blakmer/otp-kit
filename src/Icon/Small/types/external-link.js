import React from 'react'

const ExternalLink = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M6 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V10"
          stroke="#1B1F27"
          strokeLinecap="round"
        />
        <path d="M7 9L14 2" stroke="#1B1F27" strokeLinecap="round" />
        <path d="M9 2H14V7" stroke="#1B1F27" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H16V16H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ExternalLink
