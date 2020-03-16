import React from 'react'

const DiscountCircle = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.7782 4.22183C24.0739 8.5176 24.0739 15.4824 19.7782 19.7782C15.4824 24.0739 8.5176 24.0739 4.22183 19.7782C-0.0739423 15.4824 -0.0739423 8.5176 4.22183 4.22183C8.5176 -0.0739423 15.4824 -0.0739423 19.7782 4.22183"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 15.75L15.75 8.25"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0607 7.93934C10.6464 8.52513 10.6464 9.47487 10.0607 10.0607C9.47487 10.6464 8.52513 10.6464 7.93934 10.0607C7.35355 9.47487 7.35355 8.52513 7.93934 7.93934C8.52513 7.35355 9.47487 7.35355 10.0607 7.93934"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0607 13.9393C16.6464 14.5251 16.6464 15.4748 16.0607 16.0606C15.4749 16.6464 14.5251 16.6464 13.9393 16.0606C13.3536 15.4748 13.3536 14.5251 13.9393 13.9393C14.5251 13.3535 15.4749 13.3535 16.0607 13.9393Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DiscountCircle
