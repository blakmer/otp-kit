import React from 'react'

const CreditCardRemove = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.5 8.5V3.3C19.5 2.58203 18.8629 2 18.0769 2H2.42308C1.63713 2 1 2.58203 1 3.3V13.7C1 14.418 1.63713 15 2.42308 15H9.96154"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 5.5H19.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 9H10"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 11.5H7"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 21C20.2614 21 22.5 18.7614 22.5 16C22.5 13.2386 20.2614 11 17.5 11C14.7386 11 12.5 13.2386 12.5 16C12.5 18.7614 14.7386 21 17.5 21Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 14.5L16 17.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 14.5L19 17.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CreditCardRemove
