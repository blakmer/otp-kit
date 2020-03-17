import React from 'react'

const PhoneBook = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 23H6H5C4 23 3 22.1046 3 21"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 1C4.34315 1 3 2.32657 3 3.96296V21C3 19.7727 4 19 5 19H20C20.5523 19 21 18.5552 21 18.0029C21 14.5272 21 3.08424 21 1.74074C21 1.33164 20.6642 1 20.25 1H6Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 23V19"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7481 13.681L14.1591 11.3C14.7449 10.7144 15.6944 10.7144 16.2801 11.3L16.8111 11.831C17.3967 12.4167 17.3967 13.3662 16.8111 13.952L16.3511 14.412C15.9796 14.7867 15.4384 14.9386 14.9261 14.812L14.0541 14.594C10.6559 13.7456 8.00253 11.0922 7.15414 7.69397L6.94014 6.82397C6.81264 6.31288 6.96258 5.77235 7.33514 5.39997L7.79514 4.93997C8.38089 4.3544 9.33039 4.3544 9.91614 4.93997L10.4471 5.46997C11.0327 6.05572 11.0327 7.00522 10.4471 7.59097L8.06114 9.99097"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PhoneBook
