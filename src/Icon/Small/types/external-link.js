import React from 'react'

const ExternalLink = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          fill="none"
          d="M6 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V10"
          strokeLinecap="round"
        />
        <path fill="none" d="M7 9L14 2" strokeLinecap="round" />
        <path fill="none" d="M9 2H14V7" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="none" d="M0 0H16V16H0V0Z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ExternalLink
