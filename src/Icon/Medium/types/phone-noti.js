import React from 'react'

const PhoneNoti = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 14.5V20.268C18 20.9927 17.712 21.6878 17.1995 22.2002C16.6869 22.7125 15.9917 23.0003 15.267 23H8.733C8.00826 23.0003 7.3131 22.7125 6.80054 22.2002C6.28797 21.6878 6 20.9927 6 20.268V4.733C6 3.22361 7.22361 2 8.733 2H12.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 18.5H18"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 10C18.0651 10.5928 18.2687 11 18.5 11C18.7313 11 18.9349 10.5928 19 10"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 2V1"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 2C20.5711 2 22.25 3.70558 22.25 5.80952C22.25 9.38844 23 10 23 10H14C14 10 14.75 9.02679 14.75 5.80952C14.75 3.70558 16.4289 2 18.5 2Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PhoneNoti
