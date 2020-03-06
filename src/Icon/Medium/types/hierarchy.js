import React from 'react'

const Hierarchy = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M14.25 18.75H3.75C2.92157 18.75 2.25 19.4216 2.25 20.25V21.75C2.25 22.5784 2.92157 23.25 3.75 23.25H14.25C15.0784 23.25 15.75 22.5784 15.75 21.75V20.25C15.75 19.4216 15.0784 18.75 14.25 18.75Z"
          stroke="#1B1F27"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.25 11.25H3.75C2.92157 11.25 2.25 11.9216 2.25 12.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25V12.75C15.75 11.9216 15.0784 11.25 14.25 11.25Z"
          stroke="#1B1F27"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.25 3.75H3.75C2.92157 3.75 2.25 4.42157 2.25 5.25V6.75C2.25 7.57843 2.92157 8.25 3.75 8.25H14.25C15.0784 8.25 15.75 7.57843 15.75 6.75V5.25C15.75 4.42157 15.0784 3.75 14.25 3.75Z"
          stroke="#1B1F27"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.75 21.75H20.25C20.6478 21.75 21.0294 21.592 21.3107 21.3107C21.592 21.0294 21.75 20.6478 21.75 20.25V0.75"
          stroke="#1B1F27"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.75 14.25H21.75"
          stroke="#1B1F27"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.75 6.75H21.75"
          stroke="#1B1F27"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H24V24H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Hierarchy
