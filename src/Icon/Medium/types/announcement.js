import React from 'react'

const Announcement = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4674 13.504L10 14L10.4951 10.5319L19.4121 1.61555C20.2329 0.794818 21.5636 0.794818 22.3844 1.61555C23.2052 2.43627 23.2052 3.76694 22.3844 4.58767L13.4674 13.504Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M18 3L21 6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M19 14V21.5C19 22.3284 18.3284 23 17.5 23H2.5C1.67157 23 1 22.3284 1 21.5V6.5C1 5.67157 1.67157 5 2.5 5H10"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Announcement
