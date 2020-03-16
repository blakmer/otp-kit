import React from 'react'

const Flash = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.22156 15.499L5.77316 9.19631V9.19631C5.87576 8.94203 5.76422 8.64784 5.52403 8.53922C5.46562 8.51281 5.40279 8.49912 5.33929 8.49898H3.47344V8.49898C3.21296 8.50002 3.00099 8.27731 3 8.00154C2.99976 7.93255 3.01301 7.86427 3.03894 7.80098L5.92933 0.800977V0.800977C6.00441 0.618849 6.17424 0.501079 6.36195 0.500977H11.2108V0.500977C11.4716 0.501075 11.683 0.725013 11.6829 1.00116C11.6828 1.11477 11.6462 1.22498 11.5791 1.31364L9.02879 4.68898V4.68898C8.86603 4.90476 8.89931 5.21938 9.10314 5.39169C9.18681 5.46243 9.29072 5.50097 9.3978 5.50098H11.5275V5.50098C11.7883 5.50085 11.9999 5.72461 12 6.00075C12.0001 6.13366 11.9501 6.26112 11.8612 6.35498L3.22156 15.499Z"
        stroke="#1B1F27"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Flash
