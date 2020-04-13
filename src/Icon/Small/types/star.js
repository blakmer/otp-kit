import React from 'react'

const Star = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          fill="none"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.48588 0.800092L10.7165 5.21943L15.0099 5.64476C15.2186 5.6621 15.3981 5.79926 15.4698 5.99606C15.5414 6.19286 15.492 6.41334 15.3432 6.56076L11.8099 10.0628L13.1199 14.8214C13.1746 15.0276 13.1034 15.2467 12.9378 15.3812C12.7722 15.5157 12.5431 15.5406 12.3525 15.4448L7.99988 13.2894L3.65322 15.4421C3.46263 15.5379 3.23356 15.5131 3.06799 15.3786C2.90241 15.2441 2.83113 15.0249 2.88588 14.8188L4.19588 10.0601L0.659882 6.55809C0.511136 6.41067 0.461731 6.19019 0.533346 5.9934C0.604961 5.7966 0.784511 5.65944 0.993215 5.64209L5.28655 5.21676L7.51388 0.800092C7.60728 0.617682 7.79495 0.50293 7.99988 0.50293C8.20481 0.50293 8.39249 0.617682 8.48588 0.800092Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H16V16H0V0Z" fill="none" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Star
