import React from 'react'

const PartyConfetti = props => {
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
        d="M15.1923 16.1569C16.1686 15.1806 15.298 12.727 13.2478 10.6768C11.1976 8.62651 8.74406 7.75591 7.76776 8.73222C6.79145 9.70854 7.66205 12.1621 9.71229 14.2123C11.7625 16.2626 14.216 17.1332 15.1923 16.1569Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.38032 10L1.13288 20.957C0.879732 21.5046 0.99497 22.1519 1.42153 22.5785C1.84809 23.005 2.49543 23.1203 3.043 22.8671L14 16.6245"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2227 1C12.4338 2.68142 12.2531 4.38351 11.6917 6"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.765 2L15.235 4.5"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 10.7773C20.3186 10.5662 18.6165 10.7469 17 11.3083"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 7.235L19 7.765"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="5" r="1" fill="#1B1F27" />
      <circle cx="19" cy="4" r="1" fill="#1B1F27" />
      <circle cx="15" cy="8" r="1" fill="#1B1F27" />
      <circle cx="19" cy="14" r="1" fill="#1B1F27" />
    </svg>
  )
}

export default PartyConfetti
