import React from 'react'

const AnalyticsPie = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2V10H22C22 5.58172 18.4183 2 14 2Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0351 14V6C6.51696 6.0003 3.40812 8.27924 2.36319 11.6239C1.31826 14.9686 2.58028 18.6011 5.47756 20.5882C8.37484 22.5752 12.2336 22.4547 15 20.2907L10.0351 14Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 13H14L18.9431 19.5C20.8747 17.9339 22.002 15.537 22 13Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default AnalyticsPie
