import React from 'react'

const MobilePhone = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.11111 23C6.39291 23 5 21.6867 5 20.0667V3.93333C5 2.31331 6.39291 1 8.11111 1H15.8889C17.6071 1 19 2.31331 19 3.93333V20.0667C19 21.6867 17.6071 23 15.8889 23H8.11111Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18H18.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default MobilePhone
