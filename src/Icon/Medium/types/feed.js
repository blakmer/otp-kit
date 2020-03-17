import React from 'react'

const Feed = props => {
  const { hexFill } = props

  return (
    <svg
      width="19"
      height="24"
      viewBox="0 0 19 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.8 22.75H3.1C1.9402 22.75 1 21.8098 1 20.65"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.8 1.75C2.2536 1.75 1 3.0036 1 4.55V20.65C1 19.4902 1.9402 18.55 3.1 18.55H17.1C17.4866 18.55 17.8 18.2366 17.8 17.85V2.45C17.8 2.0634 17.4866 1.75 17.1 1.75H3.8Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4004 22.7499V18.5499"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.2002 15.75C5.2002 13.4305 7.0806 11.55 9.4002 11.55C11.7198 11.55 13.6002 13.4305 13.6002 15.75H5.2002Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.39961 11.5501C10.946 11.5501 12.1996 10.2965 12.1996 8.75007C12.1996 7.20368 10.946 5.95007 9.39961 5.95007C7.85321 5.95007 6.59961 7.20368 6.59961 8.75007C6.59961 10.2965 7.85321 11.5501 9.39961 11.5501Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Feed
