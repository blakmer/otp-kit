import React from 'react'

const Bicycle = props => {
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
        d="M6.97487 14.0251C8.34171 15.392 8.34171 17.608 6.97487 18.9749C5.60803 20.3417 3.39197 20.3417 2.02513 18.9749C0.658291 17.608 0.658291 15.392 2.02513 14.0251C3.39197 12.6583 5.60803 12.6583 6.97487 14.0251Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M21.9749 14.0251C23.3417 15.392 23.3417 17.608 21.9749 18.9749C20.608 20.3417 18.392 20.3417 17.0251 18.9749C15.6583 17.608 15.6583 15.392 17.0251 14.0251C18.392 12.6583 20.608 12.6583 21.9749 14.0251Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M19.4996 16.786L14.5136 5.67695V5.67695C14.3436 5.29983 14.5116 4.85631 14.8887 4.68633C14.9185 4.67288 14.9492 4.66139 14.9806 4.65195L17.9646 3.75195"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M9 7.03998H3.75"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M8.52 11.45L6 7.03998"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M4.5 16.7859L8.517 11.4519L16.173 9.37494"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Bicycle
