import React from 'react'

const Briefcase = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8C1 7.60218 1.15804 7.22064 1.43934 6.93934C1.72064 6.65804 2.10218 6.5 2.5 6.5H22C22.3978 6.5 22.7794 6.65804 23.0607 6.93934C23.342 7.22064 23.5 7.60218 23.5 8V21.5C23.5 21.8978 23.342 22.2794 23.0607 22.5607C22.7794 22.842 22.3978 23 22 23H2.5C2.10218 23 1.72064 22.842 1.43934 22.5607C1.15804 22.2794 1 21.8978 1 21.5V8Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M5.5 11.75H19"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M5.5 17.75H19"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.592 3.025C15.4923 2.72646 15.3013 2.46683 15.0459 2.28288C14.7905 2.09892 14.4837 1.99996 14.169 2H10.331C10.0163 1.99996 9.70948 2.09892 9.4541 2.28288C9.19872 2.46683 9.00767 2.72646 8.908 3.025L7.75 6.5H16.75L15.592 3.025Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M4 6.5V5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M20.5 6.5V5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <rect width="24.25" height="24" fill="none" />
      </defs>
    </svg>
  )
}

export default Briefcase
