import React from 'react'

const Hammer = props => {
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
        d="M12.9131 9L1.43242 20.4797C0.855859 21.0562 0.855859 21.991 1.43242 22.5676C2.00899 23.1441 2.94378 23.1441 3.52035 22.5676L15 11.0879"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0115 1.19176L18.4025 3.18753L22.5684 7.35693C23.1439 7.93252 23.1439 8.86555 22.5684 9.44114L19.4412 12.5679C19.1648 12.8446 18.7897 13 18.3985 13C18.0074 13 17.6323 12.8446 17.3558 12.5679L13.1869 8.39855L11.1909 4.00805C10.8237 3.20101 10.996 2.2508 11.6234 1.62413V1.62413C12.2511 0.99568 13.2032 0.823296 14.0115 1.19176Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Hammer
