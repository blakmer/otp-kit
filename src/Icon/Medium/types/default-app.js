import React from 'react'

const DefaultApp = props => {
  const { strokeClass } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23 8V18.5L12.5 23L2 18.5V8L12.5 12.5L23 8Z"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 22V13"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.9 5.80005L2 8.00005"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 6L23 8"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 4C14.99 4 17 3.33 17 2.5C17 1.67 14.99 1 12.5 1C10.01 1 8 1.67 8 2.5C8 3.33 10.01 4 12.5 4Z"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2.87012V6.62012C8 7.38012 10.01 8.00012 12.5 8.00012C14.99 8.00012 17 7.39012 17 6.62012V2.87012"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DefaultApp
