import React from 'react'

const HourGlass = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.00875 4.47418C5.2877 6.03005 6.26804 7.09575 7.99995 7.63635C9.73185 7.09575 10.7122 6.03005 10.9911 4.47418C11.0543 4.07719 10.7725 3.70586 10.3617 3.64481C10.3225 3.63897 10.2828 3.63615 10.2431 3.63636H5.7568C5.34117 3.63411 5.00235 3.95788 5.00001 4.35953C4.99979 4.39791 5.00271 4.43625 5.00875 4.47418Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 2H13"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.75674 12C5.34111 12.0022 5.00231 11.6784 5.00001 11.2767C4.99979 11.2386 5.00269 11.2004 5.00867 11.1627C5.28763 9.60678 6.268 8.54109 7.99995 8C9.7319 8.54109 10.7123 9.60678 10.9912 11.1627C11.0541 11.5597 10.7721 11.9308 10.3612 11.9916C10.3221 11.9974 10.2827 12.0002 10.2432 12L5.75674 12Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 14H13"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default HourGlass
