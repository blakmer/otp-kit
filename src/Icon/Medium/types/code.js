import React from 'react'

const Code = props => {
  const { className } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.25"
      height="24.25"
      viewBox="0 0 24.25 24.25">
      <rect class="a" style={{ fill: 'none' }} width="24" height="24" />
      <g transform="translate(0.25 0.25)">
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M14.25,23.25a3,3,0,0,0,3-3V3.75a3,3,0,0,1,6,0v3h-6"
        />
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M6.75,17.25V3.75a3,3,0,0,1,3-3h10.5"
        />
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
            fillRule: 'evenodd',
          }}
          d="M3.75,17.25a3,3,0,0,0,0,6h10.5a3,3,0,0,1,0-6Z"
        />
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M9.75,5.25h4.5"
        />
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M9.75,8.25h4.5"
        />
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M9.75,11.25h4.5"
        />
      </g>
    </svg>
  )
}

export default Code
