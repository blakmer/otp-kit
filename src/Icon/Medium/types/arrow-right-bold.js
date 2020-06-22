import React from 'react'

const ArrowRightBold = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 8.00199V5.74999C11.0002 5.60167 11.0443 5.45674 11.1268 5.33346C11.2093 5.21019 11.3264 5.1141 11.4634 5.0573C11.6004 5.00051 11.7512 4.98556 11.8967 5.01433C12.0422 5.0431 12.1759 5.11432 12.281 5.21899L18.141 11.524C18.3731 11.7956 18.5007 12.1412 18.5007 12.4985C18.5007 12.8558 18.3731 13.2014 18.141 13.473L12.281 19.773C12.1762 19.8781 12.0425 19.9497 11.8969 19.9788C11.7514 20.0079 11.6004 19.9931 11.4633 19.9364C11.3261 19.8796 11.2089 19.7834 11.1264 19.66C11.0439 19.5366 10.9999 19.3914 11 19.243V17.002H6.5C6.10218 17.002 5.72064 16.844 5.43934 16.5626C5.15804 16.2813 5 15.8998 5 15.502V9.50199C5 9.10417 5.15804 8.72263 5.43934 8.44133C5.72064 8.16002 6.10218 8.00199 6.5 8.00199H11Z"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowRightBold
