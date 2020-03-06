import React from 'react'

const Telephone = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.81265 5.40763C6.38665 4.83297 6.38665 3.90067 5.81265 3.32602L4.25102 1.76433C3.67638 1.18968 2.74411 1.18968 2.16884 1.76433L1.31357 2.62091C0.570297 3.3642 0.455115 4.52242 1.0342 5.39872C3.52174 9.15974 6.84037 12.4785 10.6013 14.9667C11.4763 15.5452 12.6389 15.4294 13.3796 14.688L14.2355 13.8314C14.8108 13.2568 14.8108 12.3245 14.2355 11.7505L12.6745 10.1894C12.1005 9.61348 11.1683 9.61348 10.593 10.1894L10.0725 10.7093C8.36064 9.30675 6.69465 7.64006 5.2921 5.92755L5.81265 5.40763V5.40763Z"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Telephone
