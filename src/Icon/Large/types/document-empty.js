import React from 'react'

const DocumentEmpty = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M33.55 2.01001C34.51 2.01001 35.4201 2.39993 36.0901 3.07977L42.9501 10.0982C43.6201 10.788 44.0001 11.7178 44.0001 12.6776V42.9407C44.0101 44.6203 42.65 45.99 40.97 46L7.03008 45.98C5.35008 45.97 3.99005 44.6003 4.00005 42.9207V5.0593C3.99005 3.37968 5.35008 2.01 7.03008 2H33.55V2.01001Z"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 2.01001V11.008C32 12.6676 33.34 14.0073 35 14.0073H44"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DocumentEmpty
