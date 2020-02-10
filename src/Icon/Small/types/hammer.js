import React from 'react'

const Hammer = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.5 6L1.27799 13.3798C0.907338 13.7504 0.907338 14.3514 1.27799 14.722C1.64864 15.0927 2.24958 15.0927 2.62022 14.722L10 7.5"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00765 1.12784L11.935 2.45836L14.7123 5.23796C15.0959 5.62168 15.0959 6.2437 14.7123 6.62743L12.6275 8.71196C12.4432 8.89638 12.1931 9 11.9324 9C11.6716 9 11.4215 8.89638 11.2372 8.71196L8.45796 5.93236L7.12729 3.00537C6.88246 2.46734 6.99736 1.83387 7.41557 1.41609V1.41609C7.83405 0.99712 8.46881 0.882197 9.00765 1.12784Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Hammer
