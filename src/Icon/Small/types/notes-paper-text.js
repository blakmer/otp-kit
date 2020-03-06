import React from 'react'

const NotesPaperText = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.9774 14.5H2.15C1.65294 14.5 1.25 14.0971 1.25 13.6V1.9C1.25 1.40294 1.65294 1 2.15 1H13.85C14.3471 1 14.75 1.40294 14.75 1.9V8.7274C14.7499 8.96593 14.6552 9.19468 14.4866 9.3634L9.6134 14.2366C9.44468 14.4052 9.21593 14.4999 8.9774 14.5Z"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.35254 14.419V9.99998C9.35254 9.50292 9.75548 9.09998 10.2525 9.09998H14.6715"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 4.25H12"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 7.25H8"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default NotesPaperText
