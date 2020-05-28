import React from 'react'

const DownloadFile = props => {
  const { className } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.25"
      height="24"
      viewBox="0 0 24.25 24">
      <rect style={{ fill: 'none' }} width="24" height="24" />
      <g transform="translate(0.25 22.792)">
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.475,
          }}
          d="M5.25-13.276,12-6.75l6.75-6.526H15V-19.8a.738.738,0,0,0-.75-.725h-4.5A.738.738,0,0,0,9-19.8v6.526Z"
        />
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M23.25-5.25v3a1.5,1.5,0,0,1-1.5,1.5H2.25a1.5,1.5,0,0,1-1.5-1.5v-3"
        />
      </g>
    </svg>
  )
}

export default DownloadFile
