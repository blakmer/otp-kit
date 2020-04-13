import React from 'react'

const SendEmail = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M2.08082 10C1.48389 9.99999 0.999987 9.58594 1 9.01419C1.00001 8.65728 1.19195 8.32555 1.50792 8.13636L13.3468 0.65772C13.8525 0.354594 14.519 0.501528 14.8355 0.985906C14.9798 1.20682 15.0318 1.47178 14.981 1.72781L12.6427 13.6562C12.5322 14.2181 11.9671 14.5878 11.3805 14.4819C11.1152 14.4341 10.8782 14.2929 10.7161 14.0861L7.57938 10H5H2.08082Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M7.71807 10H5.99902L5.99989 13.9049C5.99989 14.5097 6.4919 15 7.09883 15C7.31976 15 7.53556 14.9336 7.71807 14.8096L9.49989 12.75L7.71807 10Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M7.5 10L14.5 1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SendEmail
