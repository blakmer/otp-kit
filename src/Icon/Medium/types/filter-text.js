import React from 'react'

const FilterText = props => {
  const { className } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.247"
      height="24.25"
      viewBox="0 0 24.247 24.25">
      <rect style={{ fill: 'none' }} width="24" height="24" />
      <g transform="translate(0.25 0.25)">
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M14.247,5.25h7.5a1.5,1.5,0,0,1,1.5,1.5v15a1.5,1.5,0,0,1-1.5,1.5H8.247a1.5,1.5,0,0,1-1.5-1.5v-6"
        />
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M12.747,9.75h7.5"
        />
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M10.5,14.25H20.25"
        />
        <path
          className={className}
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M10.5,18.75h9.75"
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
          d="M8.25,9.75v-3l4.189-4.189A1.061,1.061,0,0,0,11.689.75H1.811a1.061,1.061,0,0,0-.75,1.811L5.25,6.75v6Z"
        />
      </g>
    </svg>
  )
}

export default FilterText
