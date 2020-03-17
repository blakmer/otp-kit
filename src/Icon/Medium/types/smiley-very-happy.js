import React from 'react'

const SmileyVeryHappy = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0254 23C18.1005 23 23.0254 18.0751 23.0254 12C23.0254 5.92487 18.1005 1 12.0254 1C5.95026 1 1.02539 5.92487 1.02539 12C1.02539 18.0751 5.95026 23 12.0254 23Z"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 13C6.56707 15.8571 9.03782 18 12.0005 18C14.9633 18 17.4329 15.8524 18 13C14.0567 13.8333 9.94331 13.8333 6 13L6 13Z"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinecap="round"
        />
        <path
          d="M18 9C17.7005 7.80142 16.8991 7 16 7C15.1009 7 14.2995 7.80142 14 9"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinecap="round"
        />
        <path
          d="M10 9C9.70051 7.80142 8.89909 7 8 7C7.10091 7 6.29949 7.80142 6 9"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H24V24H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SmileyVeryHappy
