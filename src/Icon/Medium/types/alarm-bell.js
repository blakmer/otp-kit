import React from 'react'

const AlarmBell = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M10 21C10.2606 21.8892 11.0749 22.5 12 22.5C12.9251 22.5 13.7394 21.8892 14 21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M12 3V1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C15.912 3 19.0833 6.19797 19.0833 10.1429C19.0833 16.8533 20.5 18 20.5 18H3.5C3.5 18 4.91667 16.1752 4.91667 10.1429C4.91667 6.19797 8.08798 3 12 3Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default AlarmBell
