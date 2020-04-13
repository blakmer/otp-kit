import React from 'react'

const Photo = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M23.414 4.5C23.414 4.10218 23.256 3.72065 22.9747 3.43934C22.6934 3.15804 22.3118 3 21.914 3H2.914C2.51617 3 2.13464 3.15804 1.85334 3.43934C1.57203 3.72065 1.414 4.10218 1.414 4.5V19.5C1.414 19.8978 1.57203 20.2794 1.85334 20.5607C2.13464 20.842 2.51617 21 2.914 21H21.914C22.3118 21 22.6934 20.842 22.9747 20.5607C23.256 20.2794 23.414 19.8978 23.414 19.5V4.5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M18.414 6C18.6792 6 18.9336 6.10536 19.1211 6.29289C19.3086 6.48043 19.414 6.73478 19.414 7C19.414 7.26522 19.3086 7.51957 19.1211 7.70711C18.9336 7.89464 18.6792 8 18.414 8C18.1488 8 17.8944 7.89464 17.7069 7.70711C17.5194 7.51957 17.414 7.26522 17.414 7C17.414 6.73478 17.5194 6.48043 17.7069 6.29289C17.8944 6.10536 18.1488 6 18.414 6Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M1.414 18L9.414 10L14.414 15L17.414 12L23.414 18"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Photo
