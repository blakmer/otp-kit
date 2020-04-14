import React from 'react'

const HouseChimney = props => {
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
        d="M3.75391 13.923V22.173H9.75391V16.173V16.173C9.75391 15.3445 10.4255 14.673 11.2539 14.673H12.7539V14.673C13.5823 14.673 14.2539 15.3445 14.2539 16.173V22.173H20.2539V13.923"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M1 11.9999L10.9636 2.4131V2.4131C11.5363 1.86214 12.4647 1.86214 13.0374 2.4131L23 11.9999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M16.5039 5.67297V4.17297H20.2539V9.42297"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default HouseChimney
