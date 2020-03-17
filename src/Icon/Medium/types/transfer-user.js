import React from 'react'

const TransferUser = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 22L17 22"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1333 11H6.86667C5.83574 11 5 11.597 5 12.3333V17.6667C5 18.403 5.83574 19 6.86667 19H17.1333C18.1643 19 19 18.403 19 17.6667V12.3333C19 11.597 18.1643 11 17.1333 11Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12"
        y1="19.25"
        x2="12"
        y2="21.25"
        stroke={hexFill}
        strokeWidth="2"
      />
      <path
        d="M6 6C6.82843 6 7.5 5.32843 7.5 4.5C7.5 3.67157 6.82843 3 6 3C5.17157 3 4.5 3.67157 4.5 4.5C4.5 5.32843 5.17157 6 6 6Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 8.75C3 8.21957 3.31607 7.71086 3.87868 7.33579C4.44129 6.96071 5.20435 6.75 6 6.75C6.79565 6.75 7.55871 6.96071 8.12132 7.33579C8.68393 7.71086 9 8.21957 9 8.75"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5C12.8284 5 13.5 4.32843 13.5 3.5C13.5 2.67157 12.8284 2 12 2C11.1716 2 10.5 2.67157 10.5 3.5C10.5 4.32843 11.1716 5 12 5Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 7.75C9 7.21957 9.31607 6.71086 9.87868 6.33579C10.4413 5.96071 11.2044 5.75 12 5.75C12.7956 5.75 13.5587 5.96071 14.1213 6.33579C14.6839 6.71086 15 7.21957 15 7.75"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 6C18.8284 6 19.5 5.32843 19.5 4.5C19.5 3.67157 18.8284 3 18 3C17.1716 3 16.5 3.67157 16.5 4.5C16.5 5.32843 17.1716 6 18 6Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8.75C15 8.21957 15.3161 7.71086 15.8787 7.33579C16.4413 6.96071 17.2044 6.75 18 6.75C18.7956 6.75 19.5587 6.96071 20.1213 7.33579C20.6839 7.71086 21 8.21957 21 8.75"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TransferUser
