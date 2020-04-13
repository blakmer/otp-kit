import React from 'react'

const HospitalFirstAid = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M3.93333 22.001C2.31331 22.001 1 20.6578 1 19.001V10.001C1 8.34414 2.31331 7.00098 3.93333 7.00098H20.0667C21.6867 7.00098 23 8.34414 23 10.001V19.001C23 20.6578 21.6867 22.001 20.0667 22.001H3.93333Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M16 6.00098V3.33431C16 2.59793 15.2837 2.00098 14.4 2.00098H9.6V2.00098C8.71634 2.00098 8 2.59793 8 3.33431V3.33431V6.00098"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M12 11V17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M9 14H15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default HospitalFirstAid
