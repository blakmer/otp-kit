import React from 'react'

const SmileUnhappy = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 18C13.1308 16.162 15.4556 14.9996 18 15"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.25 9C16.8023 9 17.25 9.44771 17.25 10C17.25 10.5523 16.8023 11 16.25 11C15.6977 11 15.25 10.5523 15.25 10C15.25 9.44771 15.6977 9 16.25 9Z"
        fill={hexFill}
      />
      <path
        d="M7.25 9C7.80229 9 8.25 9.44771 8.25 10C8.25 10.5523 7.80229 11 7.25 11C6.69771 11 6.25 10.5523 6.25 10C6.25 9.44771 6.69771 9 7.25 9Z"
        fill={hexFill}
      />
      <path
        d="M19.7782 4.22183C24.0739 8.5176 24.0739 15.4824 19.7782 19.7782C15.4824 24.0739 8.5176 24.0739 4.22183 19.7782C-0.0739423 15.4824 -0.0739423 8.5176 4.22183 4.22183C8.5176 -0.0739423 15.4824 -0.0739423 19.7782 4.22183"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SmileUnhappy
