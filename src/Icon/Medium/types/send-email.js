import React from 'react'

const SendEmail = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.84924 16.0067C1.96437 16.0066 1.24706 15.2783 1.24708 14.3798C1.24709 13.819 1.53162 13.2977 2 13.0004L19.5494 1.24821C20.2991 0.771871 21.2871 1.00277 21.7562 1.76393C21.9702 2.11109 22.0472 2.52744 21.972 2.92978L18.5057 21.6744C18.3419 22.5573 17.5042 23.1383 16.6346 22.972C16.2414 22.8968 15.8901 22.6749 15.6499 22.3499L11.0001 16.0004L2.84924 16.0067Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9999 16.0004H8V21.2969C8 22.2376 8.77314 23.0004 9.72687 23.0004C10.074 23.0004 10.4131 22.8972 10.6999 22.7042L13.4999 19.5004L10.9999 16.0004Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 15.9999L21 1.49994"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SendEmail
