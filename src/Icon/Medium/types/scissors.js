import React from 'react'

const Scissors = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75 23.5C5.49172 23.5 6.21679 23.28 6.83349 22.8679C7.4502 22.4558 7.93084 21.8701 8.21464 21.1848C8.49844 20.4996 8.57265 19.7455 8.42787 19.018C8.2831 18.2906 7.92584 17.6224 7.4013 17.098C6.87675 16.5736 6.20847 16.2165 5.48098 16.0719C4.75348 15.9274 3.99945 16.0018 3.31424 16.2857C2.62904 16.5697 2.04344 17.0505 1.6315 17.6673C1.21957 18.2842 0.999802 19.0093 1 19.751C1.00027 20.7454 1.39547 21.699 2.0987 22.402C2.80194 23.1051 3.75561 23.5 4.75 23.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75 8.5C5.49172 8.5 6.21679 8.28004 6.83349 7.86794C7.4502 7.45584 7.93084 6.87011 8.21464 6.18483C8.49844 5.49955 8.57265 4.7455 8.42787 4.01804C8.2831 3.29059 7.92584 2.6224 7.4013 2.098C6.87675 1.57359 6.20847 1.21652 5.48098 1.07193C4.75348 0.927353 3.99945 1.00176 3.31424 1.28574C2.62904 1.56972 2.04344 2.05053 1.6315 2.66734C1.21957 3.28416 0.999802 4.00928 1 4.751C1.00027 5.74539 1.39547 6.69896 2.0987 7.40201C2.80194 8.10505 3.75561 8.5 4.75 8.5V8.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M23.5 20.5L2.5 7.75101"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M23.5 4L2.5 16.751"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <rect width="24.53" height="24.25" fill="none" />
      </defs>
    </svg>
  )
}

export default Scissors
