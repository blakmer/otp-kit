import React from 'react'

const Bulb = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M15 16.25V18.5C15 19.3284 14.3284 20 13.5 20H10.5V20C9.67157 20 9 19.3284 9 18.5V16.25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M12 1V2.25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M2 11H3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M4 4L4.5 4.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M22 11H21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M20 4L19.5 4.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M9.25797 16H14.742C16.7631 15.0262 18.0296 13.0135 17.9995 10.8235C17.9411 7.63104 15.289 5.05665 12 5C8.70967 5.0567 6.05694 7.63314 6.00048 10.827C5.97169 13.0157 7.23805 15.0268 9.25797 16Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M12 20V22.25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Bulb
