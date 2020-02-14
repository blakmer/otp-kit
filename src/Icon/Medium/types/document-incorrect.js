import React from 'react'

const DocumentIncorrect = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 10.944V5.744C20.9994 5.51341 20.947 5.28591 20.8468 5.07824C20.7466 4.87056 20.6011 4.688 20.421 4.544L16.421 1.344C16.1499 1.12328 15.8116 1.0019 15.462 1H2.5C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72065 1 2.10218 1 2.5V19.5C1 19.8978 1.15804 20.2794 1.43934 20.5607C1.72064 20.842 2.10218 21 2.5 21H10.939"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 14C19.0909 14 19.6761 14.1164 20.2221 14.3425C20.768 14.5687 21.2641 14.9002 21.682 15.318C22.0998 15.7359 22.4313 16.232 22.6575 16.7779C22.8836 17.3239 23 17.9091 23 18.5C23 19.6935 22.5259 20.8381 21.682 21.682C20.8381 22.5259 19.6935 23 18.5 23C17.3065 23 16.1619 22.5259 15.318 21.682C14.4741 20.8381 14 19.6935 14 18.5C14 17.3065 14.4741 16.1619 15.318 15.318C16.1619 14.4741 17.3065 14 18.5 14V14Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 7H12"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 11H16"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 17L17 20"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 17L20 20"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15H10"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DocumentIncorrect
