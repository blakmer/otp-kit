import React from 'react'

const Download = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 1L12.002 15.752"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50195 11.251L12.002 15.751L16.502 11.251"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.752 5H18C18.7957 5 19.5587 5.30343 20.1213 5.84353C20.6839 6.38364 21 7.11618 21 7.88V20.12C21 20.8838 20.6839 21.6164 20.1213 22.1565C19.5587 22.6966 18.7957 23 18 23H6C5.20435 23 4.44129 22.6966 3.87868 22.1565C3.31607 21.6164 3 20.8838 3 20.12V7.88C3 7.11618 3.31607 6.38364 3.87868 5.84353C4.44129 5.30343 5.20435 5 6 5H8.25"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Download
