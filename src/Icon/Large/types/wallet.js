import React from 'react'

const Wallet = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26 33.52C26 36.55 28.46 39 31.5 39C34.54 39 37 36.55 37 33.52C37 30.49 34.54 28.04 31.5 28.04C30.66 28.04 29.86 28.23 29.14 28.57"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17.5 39C20.54 39 23 36.54 23 33.5C23 30.46 20.54 28 17.5 28C14.46 28 12 30.46 12 33.5C12 36.54 14.46 39 17.5 39Z"
        fill="none"
        strokeWidth="2"
      />
      <path
        d="M23.5 33C26.54 33 29 30.54 29 27.5C29 24.46 26.54 22 23.5 22C20.46 22 18 24.46 18 27.5"
        fill="none"
        strokeWidth="2"
      />
      <path
        d="M37 21C42.94 21 47 26.3 47 32.24C47 38.18 42.18 43 36.24 43H12.76C6.82 43 2 38.18 2 32.24C2 26.3 6.06 21 12 21V16H7V15C7 13.35 8.35 12 10 12H38C39.65 12 42 13.35 42 15V16H37V21Z"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 12C30.66 12 32 10.66 32 9C32 7.34 30.66 6 29 6C27.34 6 26 7.34 26 9C26 10.66 27.34 12 29 12Z"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.16 12C21.9 12 23.32 10.66 23.32 9C23.32 7.34 21.91 6 20.16 6C18.41 6 17 7.34 17 9C17 10.66 18.41 12 20.16 12Z"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Wallet
