import React from 'react'

const MoveBack = props => {
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
        fill="none"
        d="M3.50098 2.5L0.500977 6L3.50098 9.5"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M0.500977 6H13.5676V6C14.0831 6 14.501 6.44772 14.501 7V13"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default MoveBack
