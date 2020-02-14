import React from 'react'

const DocumentWarning = props => {
  const { hexFill } = props

  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 10.154V5.895C20.9994 5.66441 20.947 5.43691 20.8468 5.22923C20.7466 5.02156 20.6011 4.839 20.421 4.695L16.421 1.495C16.1494 1.27758 15.8119 1.15909 15.464 1.159H2.5C2.10218 1.159 1.72064 1.31703 1.43934 1.59834C1.15804 1.87964 1 2.26117 1 2.659V19.659C1 20.0568 1.15804 20.4384 1.43934 20.7197C1.72064 21.001 2.10218 21.159 2.5 21.159H8"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 7.154H10"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 11.154H12"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15.154H9"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 19.582C16.9005 19.582 16.8052 19.6215 16.7348 19.6918C16.6645 19.7622 16.625 19.8575 16.625 19.957C16.625 20.0565 16.6645 20.1518 16.7348 20.2222C16.8052 20.2925 16.9005 20.332 17 20.332C17.0995 20.332 17.1948 20.2925 17.2652 20.2222C17.3355 20.1518 17.375 20.0565 17.375 19.957C17.375 19.8575 17.3355 19.7622 17.2652 19.6918C17.1948 19.6215 17.0995 19.582 17 19.582Z"
        stroke={hexFill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 17.14V15.64"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.543 12.052C15.6777 11.7818 15.885 11.5545 16.1416 11.3955C16.3983 11.2366 16.6941 11.1522 16.996 11.152C17.2979 11.1522 17.5937 11.2366 17.8504 11.3955C18.107 11.5545 18.3143 11.7818 18.449 12.052L22.825 20.808C22.9483 21.0547 23.0065 21.3287 22.994 21.6042C22.9816 21.8797 22.899 22.1474 22.754 22.382C22.609 22.6165 22.4065 22.81 22.1657 22.9443C21.9248 23.0785 21.6537 23.149 21.378 23.149H12.625C12.3481 23.149 12.0758 23.0783 11.834 22.9435C11.5921 22.8088 11.3887 22.6144 11.243 22.379C11.0974 22.1434 11.0145 21.8744 11.002 21.5977C10.9896 21.321 11.0481 21.0457 11.172 20.798L15.543 12.052Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeMiterlimit="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default DocumentWarning
