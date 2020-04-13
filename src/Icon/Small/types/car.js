import React from 'react'

const Car = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 11.5C15.0523 11.5 15.5 11.0523 15.5 10.5V8.99933C15.4998 8.67953 15.3727 8.37288 15.1467 8.14667L13.5 6.5H2.5L0.853333 8.14667C0.627276 8.37288 0.500201 8.67953 0.5 8.99933V10.5C0.5 10.7652 0.605357 11.0196 0.792893 11.2071C0.98043 11.3946 1.23478 11.5 1.5 11.5H14.5Z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 8.5H3.54676C3.81915 8.50006 4.08037 8.60532 4.27304 8.79267L5 9.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8.5H12.4532C12.1809 8.50006 11.9196 8.60532 11.727 8.79267L11 9.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 6.5L3.63333 3.47333C3.85291 2.88723 4.41345 2.49918 5.03933 2.5H10.9607C11.5858 2.50002 12.1453 2.88792 12.3647 3.47333L13.498 6.5H2.5Z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 6.5L1.5 5.5H0.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 6.5L14.5 5.5H15.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.16602 11.5V12.5C1.16602 13.0523 1.61373 13.5 2.16602 13.5C2.7183 13.5 3.16602 13.0523 3.16602 12.5V11.5H1.16602Z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.166 11.5V12.5C14.166 13.0523 13.7183 13.5 13.166 13.5C12.6137 13.5 12.166 13.0523 12.166 12.5V11.5H14.166Z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Car
