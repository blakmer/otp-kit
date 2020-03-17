import React from 'react'

const TravelBag = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.50098 14.4994C1.39642 14.4994 0.500977 13.6039 0.500977 12.4994V6.49936C0.500977 5.3948 1.39642 4.49936 2.50098 4.49936H13.501C14.6055 4.49936 15.501 5.3948 15.501 6.49936V12.4994C15.501 13.6039 14.6055 14.4994 13.501 14.4994H2.50098Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.50098 4.50003V14.5"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.501 4.50003V14.5"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.501 4.49936V2.49936C10.501 1.94707 10.0533 1.49936 9.50098 1.49936H6.50098V1.49936C5.94869 1.49936 5.50098 1.94707 5.50098 2.49936V2.49936V4.49936"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TravelBag
