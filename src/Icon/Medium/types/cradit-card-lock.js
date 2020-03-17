import React from 'react'

const CreditCardLock = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.5 7.5V3.3C19.5 2.58203 18.8629 2 18.0769 2H2.42308C1.63713 2 1 2.58203 1 3.3V13.7C1 14.418 1.63713 15 2.42308 15H9.96154"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinecap="round"
      />
      <path
        d="M1 5.5H19.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinecap="round"
      />
      <path
        d="M4 9H10"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinecap="round"
      />
      <path
        d="M4 11.5H7"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinecap="round"
      />
      <rect
        x="13"
        y="15"
        width="9"
        height="6.5"
        rx="1.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 10.9973V10.9973C15.8431 10.9973 14.5 12.1912 14.5 13.664V14.9973H20.5V13.664C20.5 12.1912 19.1569 10.9973 17.5 10.9973Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinecap="round"
      />
      <path
        d="M17.5 17.625C17.7071 17.625 17.875 17.7929 17.875 18C17.875 18.2071 17.7071 18.375 17.5 18.375C17.2929 18.375 17.125 18.2071 17.125 18C17.125 17.7929 17.2929 17.625 17.5 17.625"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default CreditCardLock
