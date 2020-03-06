import React from 'react'
import propTypes from 'prop-types'

const NewFolder = props => {
  const { hexFill } = props
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.739 65H16.239C13.479 65 11.239 62.293 11.239 58.959V20.282C11.239 16.815 13.569 14 16.439 14H29.039C31.909 14 34.239 16.815 34.239 20.282V23.061H52.239C54.999 23.061 57.239 25.768 57.239 29.102V32.002H62.239C63.509 31.9499 64.7479 32.4028 65.6848 33.2616C66.6218 34.1204 67.1806 35.3153 67.239 36.585V60.417C67.1806 61.6867 66.6218 62.8816 65.6848 63.7404C64.7479 64.5992 63.509 65.0521 62.239 65H26.739Z"
        fill={hexFill}
      />
      <path
        d="M23.739 62H13.239C10.479 62 8.239 59.293 8.239 55.959V17.282C8.239 13.815 10.569 11 13.439 11H26.039C28.909 11 31.239 13.815 31.239 17.282V20.061H49.239C51.999 20.061 54.239 22.768 54.239 26.102V29.002H59.239C60.509 28.9499 61.7479 29.4028 62.6848 30.2616C63.6218 31.1204 64.1806 32.3153 64.239 33.585V57.417C64.1806 58.6867 63.6218 59.8816 62.6848 60.7404C61.7479 61.5992 60.509 62.0521 59.239 62H23.739Z"
        stroke={hexFill}
        strokeWidth="2"
      />
      <path
        d="M41.239 38V54"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.239 46H33.239"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54.239 29H23.239C21.969 28.9479 20.7301 29.4008 19.7932 30.2596C18.8562 31.1184 18.2974 32.3133 18.239 33.583V56.5C18.2249 57.9543 17.6409 59.3451 16.6125 60.3735C15.5841 61.4019 14.1933 61.9859 12.739 62"
        stroke={hexFill}
        strokeWidth="2"
      />
      <path
        opacity="0.5"
        d="M4.002 53.771V14.971C4.0041 13.9225 4.21269 12.8847 4.61586 11.9169C5.01904 10.949 5.6089 10.07 6.35177 9.33015C7.09464 8.59025 7.97597 8.00391 8.94543 7.60462C9.9149 7.20533 10.9535 7.0009 12.002 7.00301"
        stroke={hexFill}
        strokeWidth="1.996"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.5"
        d="M19.739 7H22.271"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

NewFolder.propTypes = {
  hexFill: propTypes.string,
}

NewFolder.defaultProps = {
  hexFill: '#6E7482',
}

export default NewFolder
