import React from 'react'

const View = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9985 6.00107C8.05706 5.94063 3.98066 8.44473 1.41787 11.0093C0.86071 11.5716 0.86071 12.4257 1.41787 12.988C3.92492 15.4984 7.9896 18.0603 11.9985 17.9989C16.0075 18.0603 20.0731 15.4984 22.5821 12.988C23.1393 12.4257 23.1393 11.5716 22.5821 11.0093C20.0164 8.44473 15.94 5.94063 11.9985 6.00107Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 12.0008C14.9996 13.6576 13.6562 15.0003 11.9995 15C10.3427 14.9997 8.99985 13.6565 9 11.9997C9.00015 10.343 10.3432 9 12 9C12.7959 8.99979 13.5592 9.3159 14.1218 9.87873C14.6845 10.4416 15.0004 11.2049 15 12.0008V12.0008Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default View
