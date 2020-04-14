import React from 'react'

const Earth = props => {
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
        fill="none"
        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M1.33398 6H4.8013C5.02915 6.00002 5.25045 6.07429 5.43005 6.21098C5.60964 6.34768 5.73722 6.53897 5.79251 6.75445L6.30344 8.74685C6.34112 8.89371 6.34398 9.04702 6.31178 9.19512C6.27959 9.34322 6.21319 9.48223 6.11763 9.60156C6.02208 9.7209 5.89988 9.81744 5.76033 9.88384C5.62077 9.95025 5.46753 9.98477 5.31223 9.98479H4.57718L4.00065 13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M13.834 11.3317H12.9038C12.7001 11.3317 12.5029 11.2583 12.3474 11.1246C12.1919 10.9908 12.0881 10.8053 12.0546 10.6011L11.6007 7.83158H10.6946C10.5638 7.83156 10.4347 7.80125 10.3172 7.74296C10.1996 7.68466 10.0967 7.59991 10.0162 7.49514C9.93573 7.39037 9.8798 7.26833 9.85269 7.13831C9.82557 7.00829 9.82797 6.8737 9.85971 6.74476L10.2901 4.99559C10.3367 4.80641 10.4441 4.63847 10.5954 4.51846C10.7467 4.39845 10.9331 4.33326 11.125 4.33324C11.6224 4.32961 13.5263 4.33354 13.5263 4.33354"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Earth
