import React from 'react'

const PhoneActionsCall = props => {
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
        d="M18.5682 18.9966C19.1442 19.573 19.1439 20.5074 18.5675 21.0834L17.9488 21.7022C16.4816 23.1706 14.1913 23.4222 12.4404 22.3072L12.4306 22.3003C8.20056 19.4422 4.55764 15.7995 1.69899 11.5696L1.69309 11.5598C0.578026 9.80897 0.82914 7.51841 2.29704 6.05082L2.91674 5.43204C3.49291 4.85599 4.42688 4.85599 5.00305 5.43204L7.61234 8.04062M18.5682 18.9966V18.9966ZM18.5682 18.9966L15.9579 16.388C15.3819 15.8116 14.4477 15.8113 13.8713 16.3874M13.8713 16.3874V16.3874ZM13.8713 16.3874C13.2951 16.9634 12.3605 16.9641 11.7843 16.388L7.61168 12.214C7.03568 11.6378 7.03568 10.7037 7.61168 10.1275C8.18807 9.55138 8.18837 8.61707 7.61234 8.04062M7.61234 8.04062V8.04062Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M23 1L13 11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M17 1H23V7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PhoneActionsCall
