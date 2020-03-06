import React from 'react'

const ButtonPlay = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.7782 4.22177C24.0739 8.51753 24.0739 15.4823 19.7782 19.7781C15.4824 24.0739 8.5176 24.0739 4.22183 19.7781C-0.0739423 15.4823 -0.0739423 8.51753 4.22183 4.22177C8.5176 -0.0740033 15.4824 -0.0740033 19.7782 4.22177"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.00001 15.613V15.613C9.00077 16.5165 9.73385 17.2484 10.6374 17.2476C11.0326 17.2473 11.4143 17.1039 11.712 16.844L17.25 12L11.712 7.15297V7.15297C11.0326 6.55816 9.99965 6.62673 9.40484 7.30613C9.14367 7.60444 8.9998 7.98749 9 8.38397L9.00001 15.613Z"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ButtonPlay
