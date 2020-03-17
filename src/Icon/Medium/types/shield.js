import React from 'react'

const Shield = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 1.00366V21.0037"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.00003 3.96438V11.0696C3.00003 15.6674 5.28403 19.7893 9.88203 21.4401L10.923 21.8134C11.6163 22.0622 12.3838 22.0622 13.077 21.8134L14.118 21.4401C18.716 19.7893 21 15.6674 21 11.0696V3.96438C21.0039 3.41823 20.6642 2.92073 20.132 2.69338C17.6059 1.52956 14.8167 0.949924 12 1.00339C9.18335 0.949924 6.39422 1.52956 3.86803 2.69338C3.33588 2.92073 2.99612 3.41823 3.00003 3.96438Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Shield
