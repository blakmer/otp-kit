import React from 'react'

const TextOptions = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.5333 15H2.46667C1.65665 15 1 15.7163 1 16.6V21.4C1 22.2837 1.65665 23 2.46667 23H21.5333C22.3434 23 23 22.2837 23 21.4V16.6C23 15.7163 22.3434 15 21.5333 15Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 7H15.5"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12H17"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 12H9"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11.9982V4.4375C8 3.52582 8.42143 2.65148 9.17157 2.00682C9.92172 1.36216 10.9391 1 12 1C13.0609 1 14.0783 1.36216 14.8284 2.00682C15.5786 2.65148 16 3.52582 16 4.4375V12"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 18H17L18.5 20L20 18Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TextOptions
