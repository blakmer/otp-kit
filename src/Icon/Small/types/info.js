import React from 'react'

const Info = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 11.5V7"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4C7.90111 4 7.80444 4.02932 7.72221 4.08427C7.63999 4.13921 7.5759 4.2173 7.53806 4.30866C7.50022 4.40002 7.49032 4.50055 7.50961 4.59754C7.5289 4.69454 7.57652 4.78363 7.64645 4.85355C7.71637 4.92348 7.80546 4.9711 7.90245 4.99039C7.99944 5.00969 8.09998 4.99978 8.19134 4.96194C8.2827 4.9241 8.36079 4.86001 8.41573 4.77778C8.47068 4.69556 8.5 4.59889 8.5 4.5C8.5 4.36739 8.44732 4.24022 8.35355 4.14645C8.25979 4.05268 8.13261 4 8 4Z"
        fill={hexFill}
      />
      <path
        d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
        stroke={hexFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Info
