import React from 'react'

const Paragraph = props => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M13.8189 5.97467L13.3003 5.62591C12.3837 5.00955 11.141 5.25295 10.5246 6.16955V6.16955C9.90824 7.08616 10.1516 8.32888 11.0682 8.94524L13.5577 10.6193C14.4743 11.2356 14.7177 12.4784 14.1014 13.395L12.9854 15.0546"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        fill="none"
        d="M10.2348 18.0252L10.7534 18.374C11.67 18.9903 12.9127 18.7469 13.5291 17.8303V17.8303C14.1455 16.9137 13.9021 15.671 12.9855 15.0546L10.496 13.3806C9.57936 12.7642 9.33597 11.5215 9.95233 10.6049L11.0684 8.94524"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Paragraph
