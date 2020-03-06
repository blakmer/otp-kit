import React from 'react'

const FixedMoney = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.70312 6.00002C3.03577 3.00005 5.58694 0.666687 8.68476 0.666687C12.0086 0.666687 14.7031 3.35298 14.7031 6.66669C14.7031 9.28771 13.0174 11.5162 10.6678 12.3334"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 6.5V4.5"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 6.5L10.75 9"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 11.1667C6.433 11.1667 8 10.3832 8 9.41669C8 8.45019 6.433 7.66669 4.5 7.66669C2.567 7.66669 1 8.45019 1 9.41669C1 10.3832 2.567 11.1667 4.5 11.1667Z"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.5V13.1667C8 14.1793 6.43317 15 4.5 15C2.56683 15 1 14.1793 1 13.1667V9.5"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 11.25C1 12.3547 2.56683 13.25 4.5 13.25C6.43317 13.25 8 12.3547 8 11.25"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default FixedMoney
