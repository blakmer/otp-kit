import React from 'react'

const Repeat = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.35545 6.59872L3.16837 5.85749L3.90667 1.65379"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9868 13.2092L19.9932 10.1909L22.9995 13.2092"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.23059 17.3839L7.41605 21.6483L3.16843 21.8345"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0107 6.24C16.2563 4.09169 13.5922 2.72095 10.6092 2.72095C8.44642 2.72095 6.45125 3.44154 4.84892 4.65663M1.53519 9.27587C1.21592 10.2339 1.04297 11.2593 1.04297 12.3252C1.04297 16.3668 3.52961 19.8254 7.05071 21.2429M12.9243 21.6463C17.089 20.6071 20.1755 16.828 20.1755 12.3252C20.1755 11.946 20.1536 11.572 20.111 11.2044"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Repeat
