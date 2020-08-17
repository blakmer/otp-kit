import React from 'react'

const Banknote = props => {
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
        d="M38 25.0952V31C38 32.6569 36.6569 34 35 34H5C3.34315 34 2 32.6569 2 31V12C2 10.3431 3.34315 9 5 9H21.2903"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 27C22.7614 27 25 24.7614 25 22C25 19.2386 22.7614 17 20 17C17.2386 17 15 19.2386 15 22C15 24.7614 17.2386 27 20 27Z"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 29H11.8"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 38V39C14 40.1046 14.8954 41 16 41H37.2223C42.6224 41 47 36.6508 47 31.2857V16.7143C47 11.3492 42.6224 7 37.2223 7C34.5741 7 31.9259 7 29.2777 7C26.9151 7 24.9999 8.90279 24.9999 11.25C24.9999 13.5972 26.9151 15.5 29.2777 15.5H34.7776C34.7776 15.5 36.0298 21.5714 42.1109 21.5714"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Banknote
