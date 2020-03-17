import React from 'react'

const LegalHammer = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.50098 7.82741L12.3986 11.7251C12.7652 12.0917 13.3595 12.0917 13.7261 11.7251C14.0926 11.3585 14.0926 10.7641 13.7261 10.3976L9.82754 6.49902"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.00098 8.99902L11.001 4.99902"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00098 2L4.00098 6"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.34281 9.71497V9.71497C5.72163 10.0945 6.33641 10.0951 6.71594 9.71626C7.09548 9.33744 7.09606 8.72266 6.71724 8.34312L4.65915 6.28503V6.28503C4.28032 5.90549 3.66555 5.90492 3.28601 6.28374C2.90647 6.66256 2.90589 7.27734 3.28472 7.65688C3.28472 7.65688 3.28472 7.65688 3.28472 7.65688L5.34281 9.71497Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3438 4.71628V4.71628C10.7234 5.09508 11.3383 5.0945 11.7172 4.71499C12.0961 4.33547 12.0955 3.72075 11.7159 3.34195L9.65745 1.284V1.284C9.27838 0.905206 8.66394 0.905351 8.28505 1.28433C7.90616 1.6633 7.9063 2.2776 8.28537 2.6564L10.3438 4.71628Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.00098 13.5C7.00098 12.9477 6.61722 12.5 6.14383 12.5H1.85812V12.5C1.38473 12.5 1.00098 12.9477 1.00098 13.5V14.5H7.00098V13.5Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.500977 14.5H7.50098"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LegalHammer
