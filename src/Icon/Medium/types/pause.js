import React from 'react'

const Pause = props => {
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
        d="M5 5.5C5 5.10218 5.15804 4.72064 5.43934 4.43934C5.72064 4.15804 6.10218 4 6.5 4H8C8.39782 4 8.77936 4.15804 9.06066 4.43934C9.34196 4.72064 9.5 5.10218 9.5 5.5V19C9.5 19.3978 9.34196 19.7794 9.06066 20.0607C8.77936 20.342 8.39782 20.5 8 20.5H6.5C6.10218 20.5 5.72064 20.342 5.43934 20.0607C5.15804 19.7794 5 19.3978 5 19V5.5Z"
        stroke={hexFill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 5.5C14 5.10218 14.158 4.72064 14.4393 4.43934C14.7206 4.15804 15.1022 4 15.5 4H17C17.3978 4 17.7794 4.15804 18.0607 4.43934C18.342 4.72064 18.5 5.10218 18.5 5.5V19C18.5 19.3978 18.342 19.7794 18.0607 20.0607C17.7794 20.342 17.3978 20.5 17 20.5H15.5C15.1022 20.5 14.7206 20.342 14.4393 20.0607C14.158 19.7794 14 19.3978 14 19V5.5Z"
        stroke={hexFill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Pause
