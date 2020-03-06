import React from 'react'

const PinLocation = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.1213 5.37868C15.2929 6.55025 15.2929 8.44975 14.1213 9.62132C12.9497 10.7929 11.0502 10.7929 9.87868 9.62132C8.70711 8.44975 8.70711 6.55025 9.87868 5.37868C11.0502 4.20711 12.9497 4.20711 14.1213 5.37868Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 1V1C15.866 1 19 3.98422 19 7.66543C19 10.8757 13.6779 18.0605 12.3153 19.8479V19.8479C12.1876 20.0137 11.9429 20.0495 11.7688 19.9279C11.7366 19.9054 11.7083 19.8785 11.6847 19.8479C10.3221 18.0605 5 10.8757 5 7.66543V7.66543C5 3.98422 8.13401 1 12 1V1Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6943 18C20.2962 18.4949 22 19.3209 22 20.2558C22 21.7715 17.5238 23 12 23C6.47619 23 2 21.7715 2 20.2558C2 19.3227 3.69619 18.4985 6.28571 18.0027"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PinLocation
