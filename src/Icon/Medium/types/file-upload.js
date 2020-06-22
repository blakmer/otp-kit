import React from 'react'

const FileUpload = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 23.5C18.6867 23.5 19.8467 23.1481 20.8334 22.4888C21.8201 21.8295 22.5892 20.8925 23.0433 19.7961C23.4974 18.6997 23.6162 17.4933 23.3847 16.3295C23.1532 15.1656 22.5818 14.0965 21.7426 13.2574C20.9035 12.4182 19.8344 11.8468 18.6705 11.6153C17.5067 11.3838 16.3003 11.5026 15.2039 11.9567C14.1075 12.4109 13.1705 13.1799 12.5112 14.1666C11.8519 15.1533 11.5 16.3133 11.5 17.5C11.5 19.0913 12.1321 20.6174 13.2574 21.7426C14.3826 22.8679 15.9087 23.5 17.5 23.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M17.5 20.5V14.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M17.5 14.5L15.25 16.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M17.5 14.5L19.75 16.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8.5 20.5H2.5C2.10218 20.5 1.72064 20.342 1.43934 20.0607C1.15804 19.7794 1 19.3978 1 19V2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H13.129C13.5265 1.00008 13.9078 1.15798 14.189 1.439L17.061 4.311C17.342 4.5922 17.4999 4.97345 17.5 5.371V8.5"
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

export default FileUpload
