import React from 'react'
import propTypes from 'prop-types'

const Check = props => {
  const { hexFill } = props
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84 52C84 56.3336 83.1464 60.6248 81.488 64.6286C79.8296 68.6323 77.3989 72.2702 74.3345 75.3345C71.2702 78.3989 67.6323 80.8296 63.6286 82.488C59.6248 84.1464 55.3336 85 51 85C42.2479 85 33.8542 81.5232 27.6655 75.3345C21.4768 69.1458 18 60.7521 18 52C18 43.2479 21.4768 34.8542 27.6655 28.6655C33.8542 22.4768 42.2479 19 51 19C55.3336 19 59.6248 19.8536 63.6286 21.512C67.6323 23.1704 71.2702 25.6011 74.3345 28.6655C77.3989 31.7298 79.8296 35.3677 81.488 39.3714C83.1464 43.3752 84 47.6664 84 52V52ZM64.266 40.523C64.4598 40.3421 64.5738 40.0916 64.583 39.8266C64.5922 39.5617 64.4958 39.3039 64.315 39.11C64.1341 38.9162 63.8836 38.8022 63.6186 38.793C63.3537 38.7838 63.0959 38.8802 62.902 39.061L41.733 58.823L35.124 52.214C34.9365 52.0265 34.6822 51.9212 34.417 51.9212C34.1518 51.9212 33.8975 52.0265 33.71 52.214C33.5225 52.4015 33.4172 52.6558 33.4172 52.921C33.4172 53.1862 33.5225 53.4405 33.71 53.628L41.002 60.92C41.1853 61.1032 41.4325 61.2081 41.6917 61.2126C41.9508 61.217 42.2015 61.1208 42.391 60.944L64.266 40.523Z"
        fill={hexFill}
      />
      <path
        d="M81 49C81 57.7521 77.5232 66.1458 71.3345 72.3345C65.1458 78.5232 56.7521 82 48 82C39.2479 82 30.8542 78.5232 24.6655 72.3345C18.4768 66.1458 15 57.7521 15 49C15 40.2479 18.4768 31.8542 24.6655 25.6655C30.8542 19.4768 39.2479 16 48 16C56.7521 16 65.1458 19.4768 71.3345 25.6655C77.5232 31.8542 81 40.2479 81 49V49Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.5"
        d="M10 49C9.99494 43.1417 11.3466 37.3618 13.949 32.1133C16.5514 26.8647 20.3339 22.2902 25 18.748M48 11C43.0255 10.9935 38.0985 11.9667 33.5 13.864L48 11Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M62.584 38.792L40.709 59.209L33.417 51.917"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.5"
        d="M80 16.5C80.3978 16.5 80.7794 16.342 81.0607 16.0607C81.342 15.7794 81.5 15.3978 81.5 15C81.5 14.6022 81.342 14.2206 81.0607 13.9393C80.7794 13.658 80.3978 13.5 80 13.5C79.6022 13.5 79.2206 13.658 78.9393 13.9393C78.658 14.2206 78.5 14.6022 78.5 15C78.5 15.3978 78.658 15.7794 78.9393 16.0607C79.2206 16.342 79.6022 16.5 80 16.5V16.5Z"
        stroke={hexFill}
      />
      <path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.5 79C82.8978 79 83.2794 78.842 83.5607 78.5607C83.842 78.2794 84 77.8978 84 77.5C84 77.1022 83.842 76.7206 83.5607 76.4393C83.2794 76.158 82.8978 76 82.5 76C82.1022 76 81.7206 76.158 81.4393 76.4393C81.158 76.7206 81 77.1022 81 77.5C81 77.8978 81.158 78.2794 81.4393 78.5607C81.7206 78.842 82.1022 79 82.5 79V79Z"
        fill={hexFill}
      />
      <path
        opacity="0.5"
        d="M85 24H88"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        opacity="0.5"
        d="M92 24H95"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        opacity="0.5"
        d="M90 26V29"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        opacity="0.5"
        d="M90 22V19"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        opacity="0.5"
        d="M1 78H6"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        opacity="0.5"
        d="M10 78H15"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        opacity="0.5"
        d="M8 80V85"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        opacity="0.5"
        d="M8 76V71"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

Check.propTypes = {
  hexFill: propTypes.string,
}

Check.defaultProps = {
  hexFill: '#6E7482',
}

export default Check
