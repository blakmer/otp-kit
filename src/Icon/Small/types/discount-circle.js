import React from 'react'

const DiscountCircle = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.9497 3.05025C15.6834 5.78392 15.6834 10.2161 12.9497 12.9497C10.2161 15.6834 5.78392 15.6834 3.05025 12.9497C0.316582 10.2161 0.316582 5.78392 3.05025 3.05025C5.78392 0.316582 10.2161 0.316582 12.9497 3.05025"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 10.5L10.5 5.5"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711C6.31658 7.09763 5.68342 7.09763 5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7071 9.29289C11.0976 9.68342 11.0976 10.3166 10.7071 10.7071C10.3166 11.0976 9.68342 11.0976 9.29289 10.7071C8.90237 10.3166 8.90237 9.68342 9.29289 9.29289C9.68342 8.90237 10.3166 8.90237 10.7071 9.29289Z"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DiscountCircle
