import React from 'react'

const Scooter = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.5 7.5V10.8041C10.5 11.1884 10.8358 11.5 11.25 11.5H12.75C13.1642 11.5 13.5 11.1884 13.5 10.8041V7.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4.5H1"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 4.5H20"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 3H6.03061C5.18528 3 4.5 3.67157 4.5 4.5C4.5 5.32843 5.18528 6 6.03061 6H9.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5996 6H18.069C18.9143 6 19.5996 5.32843 19.5996 4.5C19.5996 3.67157 18.9143 3 18.069 3H14.5996"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7C13.6569 7 15 5.88071 15 4.5C15 3.11929 13.6569 2 12 2C10.3431 2 9 3.11929 9 4.5C9 5.88071 10.3431 7 12 7Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14C11.1716 14 10.5 14.597 10.5 15.3333V20.6667C10.5 21.403 11.1716 22 12 22C12.8284 22 13.5 21.403 13.5 20.6667V15.3333C13.5 14.597 12.8284 14 12 14Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 19.5H15C16.6569 19.5 18 18.3061 18 16.8333V12.8333C18 9.88781 15.3137 7.5 12 7.5C8.68629 7.5 6 9.88781 6 12.8333V16.8333C6 18.3061 7.34315 19.5 9 19.5H10.5"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Scooter
