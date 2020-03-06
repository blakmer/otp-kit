import React from 'react'

const MoneyAtm = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.001 15H4.00098V3H12.001V15Z"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00098 6V5.5"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00098 12.5V12"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.40098 6H1.46764V6C1.20991 6 1.00098 5.77614 1.00098 5.5V1.5V1.5C1.00098 1.22386 1.20991 1 1.46764 1H14.5343V1C14.792 1 15.001 1.22386 15.001 1.5V5.5V5.5C15.001 5.77614 14.792 6 14.5343 6C14.5343 6 14.5343 6 14.5343 6H13.601"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 9C9.5 9.82843 8.82843 10.5 8 10.5C7.17157 10.5 6.5 9.82843 6.5 9C6.5 8.17157 7.17157 7.5 8 7.5C8.82843 7.5 9.5 8.17157 9.5 9Z"
        stroke="#1B1F27"
      />
    </svg>
  )
}

export default MoneyAtm
