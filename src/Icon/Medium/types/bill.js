import React from 'react'

const Bill = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23 21.5333C23 22.3434 22.2964 23 21.4286 23H2.57143V23C1.70355 23 1 22.3434 1 21.5333V2.46667V2.46667C1 1.65665 1.70355 1 2.57143 1H18.3329V1C18.743 0.999783 19.1371 1.14927 19.4308 1.41653L22.5254 4.23547V4.23547C22.8288 4.51149 23 4.89016 23 5.2856V21.5333Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 7H18"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12H18"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 17H12"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Bill
