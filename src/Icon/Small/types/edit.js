import React from 'react'

const Edit = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M13.4358 2.56399C12.6776 1.80937 11.4515 1.8124 10.6971 2.57076C10.6932 2.57471 10.6893 2.57868 10.6854 2.58266L2.97067 10.2975L2 14L5.70241 13.0296L13.4171 5.31469C14.1816 4.56775 14.196 3.34233 13.4492 2.57764C13.4448 2.57307 13.4403 2.56852 13.4358 2.56399Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M10.1816 3.09091L12.9089 5.81818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M9.09082 4.18182L11.8181 6.9091"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M3.09082 10.1818L5.00087 10.9985L5.81809 12.9091"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Edit
