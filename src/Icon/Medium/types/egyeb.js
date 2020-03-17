import React from 'react'

const Egyeb = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.33333 22C2.59696 22 2 21.3112 2 20.4615V3.53846C2 2.6888 2.59696 2 3.33333 2H20.6667C21.403 2 22 2.6888 22 3.53846V20.4615C22 21.3112 21.403 22 20.6667 22H3.33333Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.27344 2V10.1818L12.0007 8.36364L14.728 10.1818V2"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Egyeb
