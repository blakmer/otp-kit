import React from 'react'

const MapSearch = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M22.75 11.558V5.39281C22.7501 4.81974 22.3849 4.30438 21.828 4.09158L15.9613 1.8497C15.6117 1.71612 15.2217 1.71612 14.872 1.8497L8.62796 4.23637C8.27834 4.36995 7.88834 4.36995 7.53872 4.23637L1.75614 2.02624C1.52957 1.9395 1.27268 1.96613 1.07086 2.09729C0.869043 2.22845 0.748763 2.44694 0.75001 2.68013V16.1062C0.749909 16.6793 1.11509 17.1946 1.67205 17.4074L7.53872 19.6493C7.88834 19.7829 8.27834 19.7829 8.62796 19.6493"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.25 4.5188V11.2498"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.75 1.74976V7.49976"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5 20C17.9853 20 20 17.9853 20 15.5C20 13.0147 17.9853 11 15.5 11C13.0147 11 11 13.0147 11 15.5C11 17.9853 13.0147 20 15.5 20Z"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.2503 22.2498L19.2363 19.2358"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath>
          <path d="M0 0H24V24H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default MapSearch
