import React from 'react'

const TryAgain = props => {
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
        d="M4 9V12H1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M5.69439 13.5384C8.53246 14.7196 11.8042 13.5647 13.2718 10.8637C14.7393 8.16262 13.9277 4.78938 11.3922 3.05131C8.85672 1.31324 5.41764 1.77271 3.42738 4.11544C1.48056 6.40704 1.50776 9.77529 3.50019 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TryAgain
