import React from 'react'

const DisabilityWheelchair = props => {
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
          d="M13.2678 1.73266C14.2441 2.70898 14.2441 4.29188 13.2678 5.26819C12.2915 6.24451 10.7085 6.24451 9.73224 5.26819C8.75592 4.29188 8.75592 2.70898 9.73224 1.73266C10.7085 0.756349 12.2915 0.756349 13.2678 1.73266"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M17.2928 22.1707L15.5444 18.4999H11.4285V18.4999C10.6395 18.4999 10 17.8284 10 17V9.50035V9.50035C10 8.67197 10.6395 8.00043 11.4285 8.00043C12.2174 8.00043 12.8569 8.67197 12.8569 9.50035V9.50035V15.5001H16.4281V15.5001C16.9693 15.4999 17.4641 15.8208 17.7061 16.329L19.8488 20.8288V20.8288C20.2018 21.5699 19.9157 22.4711 19.2098 22.8417C18.504 23.2123 17.6457 22.9119 17.2928 22.1707H17.2928Z"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M12.7498 22.257C9.87956 23.9138 6.20963 22.9302 4.55278 20.06C2.89593 17.1898 3.87956 13.5198 6.74978 11.863"
          stroke={hexFill}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
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

export default DisabilityWheelchair
