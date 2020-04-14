import React from 'react'

const DocumentEmpty = props => {
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
        d="M23 21.533C22.9857 21.9357 22.8122 22.3162 22.5177 22.5912C22.2232 22.8662 21.8317 23.0132 21.429 23H2.571C2.16829 23.0132 1.77676 22.8662 1.48227 22.5912C1.18777 22.3162 1.01434 21.9357 1 21.533V2.467C1.01434 2.06432 1.18777 1.68377 1.48227 1.40877C1.77676 1.13377 2.16829 0.98677 2.571 0.999997H18.333C18.7388 0.997417 19.1309 1.14608 19.433 1.417L22.528 4.236C22.6756 4.36836 22.7939 4.53018 22.8752 4.71102C22.9565 4.89186 22.999 5.08772 23 5.286V21.533Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M17 1V5.392C17 5.81847 17.1694 6.22747 17.471 6.52903C17.7725 6.83059 18.1815 7 18.608 7H23"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DocumentEmpty
