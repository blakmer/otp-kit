import React from 'react'

const Restaurant = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.99805 1V14.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 1V5.15385C6.74712 6.17219 5.9653 6.99696 5 7V7C4.0347 6.99696 3.25288 6.17219 3.25 5.15385V1"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0006 10H12.6665C12.8899 10.0092 13.1067 9.91735 13.2648 9.74653C13.4229 9.57572 13.5079 9.34141 13.4994 9.10002C13.41 6.51522 13.3134 3.80803 11.7708 1.20583C11.6692 1.03867 11.4783 0.963073 11.3009 1.01972C11.1234 1.07636 11.0012 1.25188 11 1.45183V14.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Restaurant
