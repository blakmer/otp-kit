import React from 'react'

const Envelope = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.64477 12.6667C1.10476 12.6667 0.666992 12.2189 0.666992 11.6667V3.66666C0.666992 3.11438 1.10476 2.66666 1.64477 2.66666H14.3559C14.8959 2.66666 15.3337 3.11438 15.3337 3.66666V11.6667C15.3337 12.2189 14.8959 12.6667 14.3559 12.6667H1.64477Z"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4609 6.65332L13.0009 8.99999"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.54 6.65332L3 8.99999"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6673 3.33331L8.83198 7.70665C8.28345 8.08537 7.55785 8.08537 7.00932 7.70665L1.33398 3.33331"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Envelope
