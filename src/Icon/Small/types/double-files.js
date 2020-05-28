import React from 'react'

const DoubleFile = props => {
  const { className } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16.5"
      viewBox="0 0 16 16.5">
      <rect style={{ fill: 'none' }} width="16" height="16" />
      <g transform="translate(0.5 16.484)">
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }}
          d="M9.548-1.589A1.049,1.049,0,0,1,8.542-.5H1.505A1.049,1.049,0,0,1,.5-1.589v-9.8a1.049,1.049,0,0,1,1.005-1.089H6.618a.969.969,0,0,1,.711.319l1.925,2.084a1.136,1.136,0,0,1,.294.769Z"
          transform="translate(0 0.016)"
        />
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }}
          d="M4.5-12.521v-1.873a1.048,1.048,0,0,1,1-1.09h5.087a.96.96,0,0,1,.707.319l1.915,2.087a1.143,1.143,0,0,1,.293.77v7.725a1.048,1.048,0,0,1-1,1.09H9.55"
        />
      </g>
    </svg>
  )
}

export default DoubleFile
