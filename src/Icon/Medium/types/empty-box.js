import React from 'react'

const EmptyBox = props => {
  const { className } = props

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24.25"
      height="24.25"
      viewBox="0 0 24.25 24.25">
      <rect style={{ fill: 'none', stroke: 'none' }} width="24" height="24" />
      <g transform="translate(1 1)">
        <path
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M23.25,18.75v3a1.5,1.5,0,0,1-1.5,1.5H2.25a1.5,1.5,0,0,1-1.5-1.5v-3"
          transform="translate(-0.75 -0.75)"
        />
        <path
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M.75,5.25v-3A1.5,1.5,0,0,1,2.25.75h19.5a1.5,1.5,0,0,1,1.5,1.5v3"
          transform="translate(-0.75 -0.75)"
        />
      </g>
    </svg>
  )
}

export default EmptyBox
