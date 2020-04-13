import React from 'react'

const Telefone = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.71848 8.11142C9.57948 7.24944 9.57948 5.85099 8.71848 4.98901L6.37604 2.64649C5.51408 1.7845 4.11568 1.7845 3.25277 2.64649L1.96986 3.93134C0.854957 5.04629 0.682184 6.78361 1.55082 8.09806C5.28213 13.7396 10.2601 18.7177 15.9014 22.4501C17.2139 23.3178 18.9579 23.1441 20.069 22.032L21.3528 20.7471C22.2157 19.8851 22.2157 18.4867 21.3528 17.6257L19.0113 15.2841C18.1503 14.4202 16.7519 14.4202 15.889 15.2841L15.1082 16.064C12.5405 13.9601 10.0415 11.4601 7.93767 8.89131L8.71848 8.11142V8.11142Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Telefone
