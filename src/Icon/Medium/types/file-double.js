import React from 'react'

const FileDouble = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 22C16.5 22.3978 16.342 22.7794 16.0607 23.0607C15.7794 23.342 15.3978 23.5 15 23.5H4.5C4.10218 23.5 3.72064 23.342 3.43934 23.0607C3.15804 22.7794 3 22.3978 3 22V8.5C3 8.10218 3.15804 7.72064 3.43934 7.43934C3.72064 7.15804 4.10218 7 4.5 7H12.129C12.5265 7.00008 12.9078 7.15798 13.189 7.439L16.061 10.311C16.342 10.5922 16.4999 10.9735 16.5 11.371V22Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 7V2.5C7.5 2.10218 7.65804 1.72064 7.93934 1.43934C8.22064 1.15804 8.60218 1 9 1H16.629C17.0265 1.00008 17.4078 1.15798 17.689 1.439L20.561 4.311C20.842 4.5922 20.9999 4.97345 21 5.371V16C21 16.3978 20.842 16.7794 20.5607 17.0607C20.2794 17.342 19.8978 17.5 19.5 17.5H16.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default FileDouble
