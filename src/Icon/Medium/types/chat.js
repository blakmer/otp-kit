import React from 'react'

const Chat = props => {
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
        d="M23 12.9C23 10.1938 20.7366 8 17.9444 8H15.0556C12.2634 8 10 10.1938 10 12.9C10 15.6062 12.2634 17.8 15.0556 17.8H15.7778L20.1111 22V17.3109C21.8717 16.5043 22.9961 14.7875 23 12.9V12.9Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.42172 12.2L3.71163 15V10.3109C1.70729 9.33265 0.628726 7.04808 1.11644 4.81392C1.60416 2.57976 3.52746 0.994687 5.74419 1.00001H8.45428C10.5518 1.00028 12.4002 2.42346 13 4.50001"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Chat
