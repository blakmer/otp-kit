import React from 'react'

const SavingSafe = props => {
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
        d="M3.33333 21C2.59696 21 2 20.3924 2 19.6429V3.35714C2 2.60762 2.59696 2 3.33333 2H20.6667C21.403 2 22 2.60762 22 3.35714V19.6429C22 20.3924 21.403 21 20.6667 21H3.33333Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M7.3 18C6.58204 18 6 17.418 6 16.7V6.3C6 5.58204 6.58204 5 7.3 5H17.7C18.418 5 19 5.58204 19 6.3V16.7C19 17.418 18.418 18 17.7 18H7.3Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path fill="none" d="M5 21V23" strokeWidth="2" strokeLinejoin="round" />
      <path fill="none" d="M19 21V23" strokeWidth="2" strokeLinejoin="round" />
      <path fill="none" d="M5 9H7" strokeWidth="2" strokeLinejoin="round" />
      <path fill="none" d="M5 14H7" strokeWidth="2" strokeLinejoin="round" />
      <path
        fill="none"
        d="M14.2678 9.73223C15.2441 10.7085 15.2441 12.2915 14.2678 13.2678C13.2915 14.2441 11.7085 14.2441 10.7322 13.2678C9.75592 12.2915 9.75592 10.7085 10.7322 9.73223C11.7085 8.75592 13.2915 8.75592 14.2678 9.73223"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SavingSafe
