import React from 'react'

const FixedMoney = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 8.77143C4.49897 4.40005 8.32572 1 12.9725 1C17.9582 1 22 4.91431 22 9.74286C22 13.5621 19.4714 16.8093 15.947 18"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 9V6"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 9L17 13"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 16C10.5376 16 13 14.8807 13 13.5C13 12.1193 10.5376 11 7.5 11C4.46243 11 2 12.1193 2 13.5C2 14.8807 4.46243 16 7.5 16Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 14V19.3333C13 20.8062 10.5378 22 7.5 22C4.46217 22 2 20.8062 2 19.3333V14"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17C2 18.1047 4.46217 19 7.5 19C10.5378 19 13 18.1047 13 17"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default FixedMoney
