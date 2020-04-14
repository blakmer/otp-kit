import React from 'react'

const Laptop = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M2.50195 15V5.375C2.50195 4.61561 3.15631 4 3.96349 4H20.0404C20.8476 4 21.502 4.61561 21.502 5.375V15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4117 15C13.9172 15.8243 12.9968 16.333 12 16.333C11.0032 16.333 10.0828 15.8243 9.58827 15H1.5V16.3333C1.5 17.8061 2.7536 19 4.3 19H19.7C21.2464 19 22.5 17.8061 22.5 16.3333V15H14.4117Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Laptop
