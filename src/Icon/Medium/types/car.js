import React from 'react'

const Car = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5333 18C22.3434 18 23 17.2837 23 16.4V13.9989C22.9997 13.4873 22.8133 12.9966 22.4818 12.6347L20.0667 10H3.93333L1.51822 12.6347C1.18667 12.9966 1.0003 13.4873 1 13.9989V16.4C1 16.8243 1.15452 17.2313 1.42958 17.5314C1.70463 17.8314 2.07768 18 2.46667 18H21.5333Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 13H5.82014C6.22872 13.0001 6.62056 13.1053 6.90956 13.2927L8 14"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 13H18.1799C17.7713 13.0001 17.3794 13.1053 17.0904 13.2927L16 14"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10L5.64878 5.46C5.96822 4.58085 6.78371 3.99877 7.69425 4H16.3087C17.2181 4.00003 18.0322 4.58188 18.3512 5.46L20 10H4Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 10L2.5 8H1"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 10L21.5 8H23"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 18V19C3 19.5523 3.67157 20 4.5 20C5.32843 20 6 19.5523 6 19V18H3Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 18V19C21 19.5523 20.3284 20 19.5 20C18.6716 20 18 19.5523 18 19V18H21Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Car
