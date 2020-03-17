import React from 'react'

const List = props => {
  const { hexFill } = props

  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="1"
        y="3.4198"
        width="1"
        height="1.01536"
        rx="0.5"
        fill={hexFill}
      />
      <rect
        x="3"
        y="3.4198"
        width="12"
        height="1.01536"
        rx="0.507681"
        fill={hexFill}
      />
      <rect
        x="3"
        y="7.98895"
        width="12"
        height="1.01536"
        rx="0.507681"
        fill={hexFill}
      />
      <rect
        x="3"
        y="12.558"
        width="12"
        height="1.01536"
        rx="0.507681"
        fill={hexFill}
      />
      <rect
        x="1"
        y="12.558"
        width="1"
        height="1.01536"
        rx="0.5"
        fill={hexFill}
      />
      <rect
        x="1"
        y="7.98895"
        width="1"
        height="1.01536"
        rx="0.5"
        fill={hexFill}
      />
    </svg>
  )
}

export default List
