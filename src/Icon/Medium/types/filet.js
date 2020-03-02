import React from 'react'

const Filet = props => {
  const { hexFill } = props

  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.789 17.5V12L22.469 4.32C22.7409 4.04799 22.926 3.70148 23.001 3.32427C23.076 2.94707 23.0375 2.55609 22.8903 2.20077C22.7432 1.84545 22.494 1.54173 22.1742 1.328C21.8545 1.11427 21.4786 1.00013 21.094 1H2.984C2.59941 1.00013 2.22349 1.11427 1.90375 1.328C1.58402 1.54173 1.33482 1.84545 1.18766 2.20077C1.0405 2.55609 1.00199 2.94707 1.07698 3.32427C1.15198 3.70148 1.33711 4.04799 1.609 4.32L9.289 12V23L14.789 17.5Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Filet
