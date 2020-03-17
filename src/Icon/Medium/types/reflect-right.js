import React from 'react'

const ReflectRight = props => {
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
          d="M16.2803 17.0299L21.2203 21.9699V21.9699C21.5134 22.2627 21.9882 22.2624 22.281 21.9693C22.4215 21.8286 22.5004 21.6378 22.5003 21.4389V11.5609V11.5609C22.5004 11.1467 22.1648 10.8108 21.7506 10.8106C21.5517 10.8105 21.3609 10.8895 21.2202 11.03L16.2802 15.97V15.97C15.9876 16.2623 15.9873 16.7366 16.2796 17.0293C16.2798 17.0295 16.2801 17.0297 16.2803 17.03V17.0299Z"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.72 17.0299L2.78 21.9699V21.9699C2.48693 22.2627 2.01205 22.2624 1.71934 21.9693C1.57881 21.8286 1.49991 21.6378 1.5 21.4389V11.5609V11.5609C1.49986 11.1467 1.83553 10.8108 2.24974 10.8106C2.44861 10.8105 2.63936 10.8895 2.78006 11.03L7.72006 15.97V15.97C8.01274 16.2623 8.01302 16.7366 7.7207 17.0293C7.72047 17.0295 7.72023 17.0297 7.72 17.03L7.72 17.0299Z"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 23.25V9.75"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.954 2L21.257 7.257L16 6.56"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 7C5.84559 2.9439 9.89487 0.325852 14.0443 1.15242C17.0122 1.74361 19.8459 4.10912 20.5 7"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H24V24H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ReflectRight
