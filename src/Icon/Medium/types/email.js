import React from 'react'

const Email = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 11.9996C17 14.761 14.7614 16.9996 12 16.9996C9.23858 16.9996 7 14.761 7 11.9996C7 9.23815 9.23858 6.99957 12 6.99957V6.99957C14.7614 6.99957 17 9.23814 17 11.9996V11.9996V11.9996Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1328 11.9991V14.1993V14.1993C17.1328 15.8195 18.4462 17.1329 20.0664 17.1329C21.6866 17.1329 23 15.8195 23 14.1993V11.9991V11.9996C23 5.92444 18.0751 0.999573 12 0.999573C5.92487 0.999573 1 5.92444 1 11.9996C1 18.0747 5.92487 22.9996 12 22.9996C14.3797 22.9996 16.6953 22.2278 18.5992 20.8002"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Email
