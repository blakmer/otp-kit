import React from 'react'

const Bulb = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 1.5V2.5"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 7.5H2"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 3.5L3 4"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7.5H14"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 3.5L12.5 4"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11.5V12.7C10 13.1418 9.55228 13.5 9 13.5H7V13.5C6.44772 13.5 6 13.1418 6 12.7V11.5"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.17198 11.5H9.82798C11.1754 10.8803 12.0198 9.59952 11.9996 8.20588C11.9608 6.1743 10.1926 4.53605 7.99999 4.5C5.80645 4.53608 4.03796 6.17564 4.00032 8.20808C3.98113 9.60092 4.82537 10.8807 6.17198 11.5Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.5V14.5"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Bulb
