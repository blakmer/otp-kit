import React from 'react'

const Bicycle = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.76874 8.73223C5.74506 9.70855 5.74506 11.2915 4.76874 12.2678C3.79243 13.2441 2.20952 13.2441 1.23321 12.2678C0.256898 11.2915 0.256898 9.70855 1.23321 8.73223C2.20952 7.75592 3.79243 7.75592 4.76874 8.73223Z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2687 8.73223C15.2451 9.70855 15.2451 11.2915 14.2687 12.2678C13.2924 13.2441 11.7095 13.2441 10.7332 12.2678C9.7569 11.2915 9.7569 9.70855 10.7332 8.73223C11.7095 7.75592 13.2924 7.75592 14.2687 8.73223Z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.501 10.5L10.0404 3.8305C9.93944 3.57009 10.0391 3.26384 10.2631 3.14647C10.2808 3.13718 10.299 3.12925 10.3177 3.12273L12.0895 2.50128"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.00098 5H3.00098"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.00098 7.5L4.50098 5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10.5L5.75302 7.65127L10.5 6.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Bicycle
