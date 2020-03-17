import React from 'react'

const Search = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.58551 3.20834C10.8902 4.13834 12.0047 6.7606 11.0747 9.06531C10.1447 11.37 7.52241 12.4845 5.2177 11.5545C2.91297 10.6245 1.79854 8.00221 2.72854 5.6975C3.65854 3.39278 6.2808 2.27834 8.58551 3.20834"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 10.5L14 14"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Search
