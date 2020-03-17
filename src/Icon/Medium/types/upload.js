import React from 'react'

const Upload = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5 22V9"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 12.249L11.5 8.24902L7 12.249"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.96022 19H5.83333C4.26853 19 3 17.7105 3 16.1198V3.88015C3 2.28949 4.26853 1 5.83333 1H17.1667C18.7315 1 20 2.28949 20 3.88015V16.1198C20 17.7105 18.7315 19 17.1667 19H15.0417"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Upload
