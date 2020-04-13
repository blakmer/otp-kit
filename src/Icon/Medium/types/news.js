import React from 'react'

const News = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M21.375 7V18.875C21.375 19.3723 21.1775 19.8492 20.8258 20.2008C20.4742 20.5525 19.9973 20.75 19.5 20.75C19.0027 20.75 18.5258 20.5525 18.1742 20.2008C17.8225 19.8492 17.625 19.3723 17.625 18.875V4.5C17.625 4.16848 17.4933 3.85054 17.2589 3.61612C17.0245 3.3817 16.7065 3.25 16.375 3.25H3.875C3.54348 3.25 3.22554 3.3817 2.99112 3.61612C2.7567 3.85054 2.625 4.16848 2.625 4.5V18.875C2.625 19.3723 2.82254 19.8492 3.17417 20.2008C3.52581 20.5525 4.00272 20.75 4.5 20.75H19.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M5.75 14.5H14.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M5.75 17H10.75"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M13.875 6.375H6.375C6.02982 6.375 5.75 6.65482 5.75 7V10.75C5.75 11.0952 6.02982 11.375 6.375 11.375H13.875C14.2202 11.375 14.5 11.0952 14.5 10.75V7C14.5 6.65482 14.2202 6.375 13.875 6.375Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default News
