import React from 'react'

const MobilePhone = props => {
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
        d="M5.5 15.5C4.39544 15.5 3.5 14.6046 3.5 13.5V2.5C3.5 1.39544 4.39544 0.5 5.5 0.5H10.5C11.6046 0.5 12.5 1.39544 12.5 2.5V13.5C12.5 14.6046 11.6046 15.5 10.5 15.5H5.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3.5 12H12.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default MobilePhone
