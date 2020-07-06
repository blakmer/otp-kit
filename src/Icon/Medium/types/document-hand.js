import React from 'react'

const DocumentHand = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 14.5V23.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 22H16C16 21.2044 15.6839 20.4413 15.1213 19.8787C14.5587 19.3161 13.7956 19 13 19H9.25C9.25 18.2044 8.93393 17.4413 8.37132 16.8787C7.80871 16.3161 7.04565 16 6.25 16H1"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 19H9.25"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 12.25V2.5C7 2.10218 7.15804 1.72064 7.43934 1.43934C7.72064 1.15804 8.10218 1 8.5 1H19.129C19.5265 1.00008 19.9078 1.15798 20.189 1.439L23.061 4.311C23.342 4.5922 23.4999 4.97345 23.5 5.371V19C23.5 19.3978 23.342 19.7794 23.0607 20.0607C22.7794 20.342 22.3978 20.5 22 20.5H19.75"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <rect width="24.25" height="24.25" fill="none" />
      </defs>
    </svg>
  )
}

export default DocumentHand
