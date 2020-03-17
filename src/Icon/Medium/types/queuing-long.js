import React from 'react'

const QueuingLong = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 22C1 18.6863 3.91015 16 7.5 16C11.0899 16 14 18.6863 14 22"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.4871C8.86051 14.9494 6.87964 15.4139 5.2275 14.606C3.57536 13.7982 2.6916 11.933 3.09826 10.1122C3.50492 8.29152 5.09378 6.99975 6.9263 7C7.11735 7.0001 7.30815 7.01403 7.49726 7.0417"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 14.9369C19.219 15.755 17.9023 16.1489 16.6189 15.9485C15.3354 15.7481 14.3155 14.9892 14 14"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3012 22H23C23 19.2386 20.7675 17 18.0136 17C17.3193 16.9991 16.6328 17.1468 16 17.4333"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 11C17.7614 11 20 8.76142 20 6C20 3.23858 17.7614 1 15 1C12.2386 1 10 3.23858 10 6C10 8.76142 12.2386 11 15 11Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6V4"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6L16 7"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default QueuingLong
