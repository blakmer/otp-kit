import React from 'react'

const TickInCircle = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.4246 4.57538C23.5251 8.67589 23.5251 15.3241 19.4246 19.4246C15.3241 23.5251 8.67588 23.5251 4.57538 19.4246C0.474873 15.3241 0.474873 8.67588 4.57538 4.57538C8.67589 0.474873 15.3241 0.474873 19.4246 4.57538"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12L10 16L17 9"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TickInCircle
