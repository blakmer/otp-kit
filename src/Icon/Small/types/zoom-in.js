import React from 'react'

const ZoomIn = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.00098 7H10.001"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.00098 10V4"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.501 11.5L15.001 15"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.001 6.99934V7C13.001 10.3137 10.3147 13 7.00098 13C3.68727 13 1.00098 10.3137 1.00098 7C1.00098 3.68629 3.68727 1 7.00098 1C7.00142 1 7.00186 1 7.0023 1H7.0023C10.3152 1.00073 13.0006 3.6864 13.001 6.99934V6.99934Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ZoomIn
