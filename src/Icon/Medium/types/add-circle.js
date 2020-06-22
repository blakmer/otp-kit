import React from 'react'

const AddCircle = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.25 7.75V16.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M7.75 12.25H16.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.25 23.5C14.475 23.5 16.6501 22.8402 18.5002 21.604C20.3502 20.3679 21.7922 18.6109 22.6436 16.5552C23.4951 14.4995 23.7179 12.2375 23.2838 10.0552C22.8498 7.87295 21.7783 5.86839 20.205 4.29505C18.6316 2.72171 16.6271 1.65025 14.4448 1.21617C12.2625 0.782087 10.0005 1.00487 7.94481 1.85636C5.88914 2.70785 4.13213 4.14979 2.89597 5.99984C1.6598 7.84989 1 10.025 1 12.25C1 15.2337 2.18526 18.0952 4.29505 20.205C6.40483 22.3147 9.26631 23.5 12.25 23.5V23.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <rect width="24.25" height="24.25" fill="none" />
      </defs>
    </svg>
  )
}

export default AddCircle
