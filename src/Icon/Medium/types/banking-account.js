import React from 'react'

const BankingAccount = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 22L12 22"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 7H2L11.2276 2.19845C11.458 2.06888 11.7261 2 12 2C12.2739 2 12.542 2.06888 12.7724 2.19845L22 7Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 10H17"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 10V18H10V10"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10V18H3V10"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.1875 16.9375C19.2748 16.9375 20.1562 16.0561 20.1562 14.9688C20.1562 13.8814 19.2748 13 18.1875 13C17.1002 13 16.2188 13.8814 16.2188 14.9688C16.2188 16.0561 17.1002 16.9375 18.1875 16.9375Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 22C15 21.0054 15.3556 20.0516 15.9885 19.3483C16.6214 18.6451 17.4799 18.25 18.375 18.25C19.2701 18.25 20.1286 18.6451 20.7615 19.3483C21.3944 20.0516 21.75 21.0054 21.75 22"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BankingAccount
