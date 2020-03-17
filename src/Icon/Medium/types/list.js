import React from 'react'

const List = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="4" width="2" height="2" rx="1" fill={hexFill} />
      <rect x="5" y="4" width="18" height="2" rx="1" fill={hexFill} />
      <rect x="5" y="11" width="18" height="2" rx="1" fill={hexFill} />
      <rect x="5" y="18" width="18" height="2" rx="1" fill={hexFill} />
      <rect x="1" y="18" width="2" height="2" rx="1" fill={hexFill} />
      <rect x="1" y="11" width="2" height="2" rx="1" fill={hexFill} />
    </svg>
  )
}

export default List
