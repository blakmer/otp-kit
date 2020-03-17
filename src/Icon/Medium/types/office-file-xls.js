import React from 'react'

const OfficeFileXls = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 24H2.53846C1.68879 24 1 23.3433 1 22.5333V3.46667C1 2.65665 1.68879 2 2.53846 2H13.44C13.8482 2.00008 14.2397 2.15485 14.5282 2.43022L20.5497 8.17076C20.8382 8.44594 21.0002 8.81913 21 9.20818V13"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.2461 9.24805H14.2461V9.24805C13.4177 9.24805 12.7461 8.57647 12.7461 7.74805V7.74805V1.74805"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 16L10.5 23.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 16L7.5 23.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 16V22C13.5 22.8284 14.1716 23.5 15 23.5H16.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 16H21C20.1716 16 19.5 16.6716 19.5 17.5C19.5 19.75 22.5 19.75 22.5 22C22.5 22.8284 21.8284 23.5 21 23.5H19.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default OfficeFileXls
