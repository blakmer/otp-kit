import React from 'react'

const CalendarWarning = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.81818 15.5H2.36364C1.61052 15.5 1 14.8956 1 14.15V3.35C1 2.60442 1.61052 2 2.36364 2H14.6364C15.3895 2 16 2.60442 16 3.35V7.4"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 6.5H16"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 3.5V1"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3.5V1"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5674 18.8165C16.3603 18.8165 16.1924 18.9844 16.1924 19.1915C16.1924 19.3986 16.3603 19.5665 16.5674 19.5665C16.7745 19.5665 16.9424 19.3986 16.9424 19.1915C16.9424 18.9844 16.7745 18.8165 16.5674 18.8165V18.8165"
        stroke="#1B1F27"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 16.5V15"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.3129 19.933C22.5877 20.483 22.5582 21.136 22.2349 21.6589C21.9116 22.1818 21.3407 22.5 20.7259 22.5H12.2741C11.6593 22.5 11.0884 22.1818 10.7651 21.6589C10.4418 21.136 10.4123 20.483 10.6871 19.933L14.913 11.4812C15.2134 10.8799 15.8278 10.5 16.5 10.5C17.1722 10.5 17.7866 10.8799 18.087 11.4812L22.3129 19.933Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CalendarWarning
