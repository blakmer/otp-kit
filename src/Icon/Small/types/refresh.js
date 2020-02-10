import React from 'react'

const Refresh = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 9.38226V12.3823H1"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1992 6.84305V3.84305H15.1992"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7899 4V4C15.1377 6.35414 15.0581 10.0944 12.6121 12.354C10.8504 13.9814 8.25409 14.4493 6 13.5454"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.70557 12V12C1.35943 9.64149 1.44427 5.89927 3.89509 3.64148C5.65644 2.01885 8.24829 1.5523 10.5 2.45254"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Refresh
