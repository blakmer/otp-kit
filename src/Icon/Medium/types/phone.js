import React from 'react'

const Phone = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.2568 17.5001H14.2647V17.5001C15.5288 18.3047 17.1821 18.1231 18.2413 17.0631L18.6891 16.6163V16.6163C19.1049 16.2 19.1049 15.5256 18.6891 15.1093L16.8068 13.2268V13.2268C16.3906 12.8109 15.7162 12.8109 15.3 13.2268V13.2268C14.8835 13.6428 14.2087 13.6428 13.7922 13.2268L10.7786 10.2118V10.2118C10.3627 9.79559 10.3627 9.12111 10.7786 8.70486V8.70486C11.1944 8.28861 11.1944 7.61412 10.7786 7.19787L8.89627 5.31538V5.31538C8.48171 4.89733 7.80678 4.89453 7.38877 5.30913C7.38734 5.31055 7.38592 5.31197 7.38449 5.3134L6.93671 5.76024V5.76024C5.87776 6.82049 5.6966 8.4738 6.50081 9.73825V9.74519L6.50081 9.74518C8.56692 12.8021 11.1998 15.4345 14.2568 17.5001V17.5001Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8002 18.6005C24.4452 13.7407 23.4606 6.84609 18.601 3.20087C13.7413 -0.44431 6.84689 0.540323 3.20179 5.40012C-0.443291 10.2599 0.541313 17.1546 5.40097 20.7998C7.30512 22.2281 9.6212 23.0001 12.0015 23C16.3206 23 18.3033 20.9117 17.0998 17.7754"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Phone