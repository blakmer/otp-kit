import React from 'react'

const SmileyUnhappy = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          fill="none"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0254 23C18.1005 23 23.0254 18.0751 23.0254 12C23.0254 5.92487 18.1005 1 12.0254 1C5.95026 1 1.02539 5.92487 1.02539 12C1.02539 18.0751 5.95026 23 12.0254 23Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill="none"
          d="M12 18C13.1308 15.5494 15.4556 13.9995 18 14"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill="none"
          d="M8.5 8.125C8.70711 8.125 8.875 8.29289 8.875 8.5C8.875 8.70711 8.70711 8.875 8.5 8.875C8.29289 8.875 8.125 8.70711 8.125 8.5C8.125 8.29289 8.29289 8.125 8.5 8.125"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill="none"
          d="M15.5 8.125C15.7071 8.125 15.875 8.29289 15.875 8.5C15.875 8.70711 15.7071 8.875 15.5 8.875C15.2929 8.875 15.125 8.70711 15.125 8.5C15.125 8.29289 15.2929 8.125 15.5 8.125"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H24V24H0V0Z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SmileyUnhappy
