import React from 'react'

const Chair = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 12V9.33333C20 5.28325 16.4183 2 12 2C7.58172 2 4 5.28325 4 9.33333V12"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 14.7702C22.0005 13.4951 21.1623 12.3846 19.9699 12.0803C18.7775 11.776 17.5392 12.3566 16.9705 13.4867C16.4017 14.6167 16.6497 16.004 17.5711 16.8468H6.43093C7.29901 16.0512 7.57348 14.7649 7.11025 13.663C6.64702 12.5612 5.55197 11.8957 4.39997 12.0159C3.24798 12.1361 2.30233 13.0145 2.05949 14.1901C1.81664 15.3656 2.3321 16.5695 3.33525 17.1698V19.6156C3.33525 20.3802 3.93214 21 4.66845 21H19.3336C20.0699 21 20.6668 20.3802 20.6668 19.6156V17.1698C21.4923 16.6749 22.0006 15.76 22 14.7702Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 21V22"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 21V22"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8857 8.15015L13.6191 10.8835"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6191 8.15015L10.8857 10.8835"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Chair
