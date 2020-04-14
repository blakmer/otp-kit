import React from 'react'

const EditUser = props => {
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
        d="M9 4C10.3512 5.27836 11.2146 6.00038 13.1617 6C14.1376 6.00025 15.1034 5.81902 16 5.46737"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1025 12C14.864 12 17.1025 9.76142 17.1025 7C17.1025 4.23858 14.864 2 12.1025 2C9.34112 2 7.10254 4.23858 7.10254 7C7.10254 9.76142 9.34112 12 12.1025 12Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M3 22C3 17.0294 7.02944 13 12 13C12.6874 13 13.3568 13.0771 14 13.223C14.7013 13.3822 15.3715 13.6232 16 13.9355"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="15" y="16" width="9" height="2" rx="1" stroke="none" />
      <rect x="15" y="19" width="9" height="2" rx="1" stroke="none" />
      <rect x="15" y="22" width="9" height="2" rx="1" stroke="none" />
    </svg>
  )
}

export default EditUser
