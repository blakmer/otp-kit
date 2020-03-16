import React from 'react'

const TripRoad = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 1C14.4853 1 16.5 3.02717 16.5 5.52782C16.5 7.46069 13.812 11.1393 12.591 12.7099C12.336 13.0384 11.8646 13.0966 11.5382 12.84C11.4901 12.8021 11.4467 12.7584 11.409 12.7099C10.188 11.1383 7.5 7.46069 7.5 5.52782C7.5 3.02717 9.51472 1 12 1Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 23L6 12"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 23L18 12"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22.5V21"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.5V16"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="5.5" r="1" fill="#1B1F27" stroke="#1B1F27" />
    </svg>
  )
}

export default TripRoad
