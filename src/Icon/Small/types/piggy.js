import React from 'react'

const Piggy = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.5 5.5C15.5 6.60457 14.6046 7.5 13.5 7.5"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinecap="round"
      />
      <path
        d="M5.5 4.8509L5.5 4.8509C6.76037 4.38303 8.23963 4.38303 9.5 4.8509"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinecap="round"
      />
      <path
        d="M4.1875 6.5H4.1875C4.08395 6.5 4 6.58395 4 6.6875C4 6.79105 4.08395 6.875 4.1875 6.875C4.29105 6.875 4.375 6.79105 4.375 6.6875V6.6875C4.375 6.58395 4.29105 6.5 4.1875 6.5"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.26667 2.922C4.484 1.504 2.5 1.5 2.5 1.5L2.91733 4.42267C2.37162 5.01737 1.96693 5.7274 1.73333 6.5H0.5V10.5H2.16C2.50523 11.1053 2.95955 11.6415 3.5 12.0813V14C3.5 14.2761 3.72386 14.5 4 14.5H5C5.27614 14.5 5.5 14.2761 5.5 14V13.1727C6.79763 13.6066 8.20079 13.6092 9.5 13.18V14C9.5 14.2761 9.72386 14.5 10 14.5H11C11.2761 14.5 11.5 14.2761 11.5 14V12.0913C12.7491 11.0986 13.4839 9.59549 13.5 8C13.5 3.67067 8.8 1.74067 5.26667 2.922Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Piggy
