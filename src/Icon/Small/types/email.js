import React from 'react'

const Email = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5V5C9.65685 5 11 6.34314 11 8V8V8Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 7.99923V9.39936C11 10.4304 12.1021 11.2662 13.1332 11.2662C14.1642 11.2662 15 10.4304 15 9.39936V7.99923C15 4.13324 11.866 0.999542 8 0.999542C4.13401 0.999542 1 4.13355 1 7.99954C1 11.8655 4.13401 14.9995 8 14.9995C9.51438 14.9995 10.9879 14.5084 12.1995 13.5999"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Email
