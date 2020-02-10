import React from 'react'

const Edit = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.9656 2.03398C20.5757 0.650509 18.3277 0.656064 16.9447 2.04639C16.9375 2.05363 16.9303 2.06091 16.9232 2.06821L2.77956 16.2122L1 23L7.78776 21.2209L21.9314 7.07693C23.3329 5.70754 23.3593 3.46094 21.9903 2.05901C21.9821 2.05062 21.9739 2.04228 21.9656 2.03398Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3L21 8"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5L19 10"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16L6.50176 17.4973L8 21"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Edit
