import React from 'react'

const Refresh = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 14V18H2"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 10V6H22"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.4812 6V6C21.9339 9.53122 21.8169 15.1415 18.2198 18.531C15.6291 20.9722 11.8109 21.6739 8.49609 20.3181"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5082 18V18C2.05798 14.4622 2.18275 8.84891 5.78689 5.46222C8.37711 3.02827 12.1887 2.32844 15.5 3.67881"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Refresh
