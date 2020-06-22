import React from 'react'

const Xml = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H22C22.3978 1 22.7794 1.15804 23.0607 1.43934C23.342 1.72064 23.5 2.10218 23.5 2.5V22C23.5 22.3978 23.342 22.7794 23.0607 23.0607C22.7794 23.342 22.3978 23.5 22 23.5H2.5C2.10218 23.5 1.72064 23.342 1.43934 23.0607C1.15804 22.7794 1 22.3978 1 22V2.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M4.75 10.746L7.75 18.246"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M7.75 10.746L4.75 18.246"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M18.25 10.746V16.746C18.25 17.1438 18.408 17.5254 18.6893 17.8067C18.9706 18.088 19.3522 18.246 19.75 18.246H21.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M15.25 18.246V10.746L13 14.496L10.75 10.746V18.246"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <rect width="24.25" height="24.25" fill="none" />
      </defs>
    </svg>
  )
}

export default Xml
