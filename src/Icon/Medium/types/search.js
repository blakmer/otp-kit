import React from 'react'

const Search = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M16.3316 4.61713C20.6842 6.37569 22.7871 11.3298 21.0285 15.6823C19.27 20.0349 14.3159 22.1378 9.9633 20.3793C5.61071 18.6207 3.50783 13.6666 5.2664 9.31404C7.02496 4.96145 11.979 2.85856 16.3316 4.61713"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M20 19L26 25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Search
