import React from 'react'

const Document = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5928 23H2.46667C1.65665 23 1 22.3434 1 21.5333V2.46667C1 1.65665 1.65665 1 2.46667 1H21.5333C22.3434 1 23 1.65665 23 2.46667V13.5928C22.9999 13.9815 22.8455 14.3543 22.5708 14.6292L14.6292 22.5708C14.3543 22.8455 13.9815 22.9999 13.5928 23Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.25 22.25V14.7728C13.25 13.9318 13.9318 13.25 14.7728 13.25H22.25"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6.75H18"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 11.25H11.25"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Document
