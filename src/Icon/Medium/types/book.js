import React from 'react'

const Book = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.9794 22.67C15.4366 20.6172 18.4453 19.3131 21.6397 18.9163C22.4184 18.8151 23.0003 18.1599 23 17.3849V6.55904C23.0025 5.70049 22.2992 5.00249 21.4291 5.00001C21.3543 4.99979 21.2796 5.00484 21.2055 5.0151C18.171 5.47752 15.3245 6.75704 12.9794 8.71282C12.4022 9.15481 11.5949 9.15481 11.0177 8.71282C8.67304 6.75856 5.82768 5.48009 2.79446 5.018C1.93284 4.89862 1.13628 5.49108 1.0153 6.34129C1.00504 6.41343 0.999925 6.48619 1 6.55903V17.3849C0.99973 18.1599 1.58175 18.8152 2.36043 18.9163C5.5558 19.3126 8.56559 20.6167 11.0236 22.67C11.5992 23.11 12.4037 23.11 12.9794 22.67Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.036 1C17.4578 1.64554 15.0583 2.86409 13.016 4.565C12.4258 5.02304 11.6002 5.02304 11.01 4.565C8.97075 2.86546 6.57474 1.64729 4 1.001"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.5V22"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Book
