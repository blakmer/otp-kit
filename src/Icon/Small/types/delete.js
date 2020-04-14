import React from 'react'

const Delete = props => {
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
        d="M12.4507 2.55025C15.1844 5.28392 15.1844 9.71608 12.4507 12.4497C9.71705 15.1834 5.2849 15.1834 2.55123 12.4497C-0.182441 9.71608 -0.182441 5.28392 2.55123 2.55025C5.2849 -0.183418 9.71705 -0.183418 12.4507 2.55025"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.00098 10L10.001 5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.001 10L5.00098 5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Delete
