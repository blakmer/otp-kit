import React from 'react'

const HourGlass = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.01749 5.67565C6.57539 8.7874 8.53608 10.9188 11.9999 12C15.4637 10.9188 17.4244 8.7874 17.9823 5.67565C18.1087 4.88167 17.5451 4.13902 16.7235 4.0169C16.645 4.00524 16.5656 3.99959 16.4862 4.00002H7.5136C6.68235 3.99551 6.0047 4.64306 6.00002 5.44636C5.99958 5.52312 6.00542 5.59979 6.01749 5.67565Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 1H20"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.51348 20C6.68221 20.0044 6.00462 19.3568 6.00002 18.5535C5.99959 18.4771 6.00538 18.4008 6.01734 18.3253C6.57526 15.2136 8.53599 13.0822 11.9999 12C15.4638 13.0822 17.4245 15.2136 17.9825 18.3253C18.1083 19.1194 17.5441 19.8617 16.7224 19.9832C16.6443 19.9948 16.5653 20.0004 16.4863 20L7.51348 20Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 23H20"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default HourGlass
