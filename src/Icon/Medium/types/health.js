import React from 'react'

const Health = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 12V23"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 21H18C18 19.067 16.4571 17.5 14.5538 17.5H12.4H10C10 15.567 8.70326 14 6.8 14H2"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 17.5H10"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0002 11L11.8862 5.91873C10.965 5.04193 10.737 3.70183 11.3202 2.5928V2.5928C11.755 1.76435 12.5815 1.18554 13.5414 1.03722C14.5014 0.888896 15.4776 1.18916 16.1652 1.84418L17.0002 2.63947L17.8352 1.84418C18.5229 1.18917 19.4993 0.888923 20.4593 1.03723C21.4194 1.18554 22.246 1.76433 22.6812 2.5928V2.5928C23.2634 3.70212 23.035 5.04187 22.1142 5.91873L17.0002 11Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Health
