import React from 'react'

const Pin = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 8.5C20 12.721 17.067 15.149 14.869 17.5C13.553 18.908 12.5 23.5 12.5 23.5C12.5 23.5 11.45 18.911 10.137 17.507C7.937 15.157 5 12.725 5 8.5C5 6.51088 5.79018 4.60322 7.1967 3.1967C8.60322 1.79018 10.5109 1 12.5 1C14.4891 1 16.3968 1.79018 17.8033 3.1967C19.2098 4.60322 20 6.51088 20 8.5V8.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 11.5C13.0933 11.5 13.6734 11.3241 14.1667 10.9944C14.6601 10.6648 15.0446 10.1962 15.2716 9.64805C15.4987 9.09987 15.5581 8.49667 15.4424 7.91473C15.3266 7.33279 15.0409 6.79824 14.6213 6.37868C14.2018 5.95912 13.6672 5.6734 13.0853 5.55765C12.5033 5.44189 11.9001 5.5013 11.3519 5.72836C10.8038 5.95543 10.3352 6.33994 10.0056 6.83329C9.67595 7.32664 9.5 7.90666 9.5 8.5C9.5 9.29565 9.81607 10.0587 10.3787 10.6213C10.9413 11.1839 11.7044 11.5 12.5 11.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <rect width="24" height="24.25" fill="none" />
      </defs>
    </svg>
  )
}

export default Pin
