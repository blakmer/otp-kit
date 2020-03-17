import React from 'react'

const Tags = props => {
  const { hexFill } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.061"
      height="24"
      viewBox="0 0 24.061 24">
      <rect style={{ fill: 'none' }} width="24" height="24" />
      <g transform="translate(0.5 -0.353)">
        <path
          style={{
            fill: 'none',
            stroke: hexFill,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M4.5,1.353H12l10.5,10.5"
        />
        <path
          style={{
            fill: 'none',
            stroke: hexFill,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
            fillRule: 'evenodd',
          }}
          d="M9.129,4.353H3a1.5,1.5,0,0,0-1.5,1.5v6.128a1.5,1.5,0,0,0,.439,1.061L11.1,22.2a1.5,1.5,0,0,0,2.465-.534L15,17.853l3.819-1.433a1.5,1.5,0,0,0,.534-2.465L10.189,4.792A1.5,1.5,0,0,0,9.129,4.353Z"
        />
        <path
          style={{
            fill: 'none',
            stroke: hexFill,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
          d="M6,8.478a.374.374,0,1,0,.265.11A.375.375,0,0,0,6,8.478"
        />
      </g>
    </svg>
  )
}

export default Tags
