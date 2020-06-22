import React from 'react'

const UploadFile = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.999 8.791L12.249 2.265L5.49899 8.791L9.24899 8.791V15.315C9.25241 15.5106 9.33332 15.6968 9.47395 15.8327C9.61458 15.9687 9.80343 16.0432 9.99899 16.04H14.499C14.6946 16.0432 14.8834 15.9687 15.024 15.8327C15.1647 15.6968 15.2456 15.5106 15.249 15.315V8.789L18.999 8.791Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M23.5 17.542V20.542C23.5 20.9398 23.342 21.3214 23.0607 21.6027C22.7794 21.884 22.3978 22.042 22 22.042H2.5C2.10218 22.042 1.72064 21.884 1.43934 21.6027C1.15804 21.3214 1 20.9398 1 20.542V17.542"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <rect width="24.25" height="24" fill="none" />
      </defs>
    </svg>
  )
}

export default UploadFile
