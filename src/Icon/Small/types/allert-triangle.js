import React from 'react'

const AllertTriangle = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10.5V5.5" stroke="#1B1F27" strokeLinecap="round" />
      <path
        d="M8 12C8.27614 12 8.5 12.2239 8.5 12.5C8.5 12.7761 8.27614 13 8 13C7.72386 13 7.5 12.7761 7.5 12.5C7.5 12.2239 7.72386 12 8 12Z"
        fill="#1B1F27"
      />
      <path
        d="M9.08076 1.17344V1.17344C8.7876 0.576608 8.06613 0.330439 7.4693 0.623602C7.23025 0.741023 7.03688 0.934391 6.91946 1.17344L0.604232 14.0387V14.0387C0.35718 14.5412 0.564317 15.1489 1.06688 15.396C1.20628 15.4645 1.35956 15.5001 1.51488 15.5H14.4853V15.5C15.0454 15.5004 15.4996 15.0467 15.5 14.4867C15.5001 14.3314 15.4645 14.1781 15.396 14.0387L9.08076 1.17344Z"
        stroke="#1B1F27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default AllertTriangle
