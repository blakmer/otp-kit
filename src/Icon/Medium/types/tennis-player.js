import React from 'react'

const TennisPlayer = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          fill="none"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 6C15.8807 6 17 4.88071 17 3.5C17 2.11929 15.8807 1 14.5 1C13.1193 1 12 2.11929 12 3.5C12 4.88071 13.1193 6 14.5 6Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill="none"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.1248 9.19072L20.0101 8.34488C18.7897 7.86117 17.426 7.8872 16.2249 8.41714L12.3804 10.1246C12.0362 10.2756 11.6458 10.2829 11.2962 10.145L8.90783 9.19072C8.19427 8.90598 7.38472 9.25295 7.09966 9.96569C6.81459 10.6784 7.16196 11.4871 7.87552 11.7718L10.2639 12.726C11.2244 13.1065 12.2917 13.1201 13.2616 12.764V14.6502L11.592 15.9C10.8925 16.4262 10.4805 17.2497 10.479 18.1244V21.5986C10.479 22.366 11.1019 22.9882 11.8703 22.9882C12.6387 22.9882 13.2616 22.366 13.2616 21.5986V18.1244L15.3485 16.5615V18.1244C15.348 18.3764 15.4166 18.6238 15.5469 18.8396L17.6338 22.3138C17.8871 22.7448 18.3525 23.0067 18.8528 22.9999C19.3531 22.993 19.8112 22.7183 20.0525 22.2805C20.2938 21.8427 20.2811 21.3093 20.0194 20.8833L18.131 17.739V10.7796C18.4201 10.7689 18.7082 10.8187 18.9769 10.9259L21.0925 11.7718C21.5541 11.956 22.079 11.8802 22.4695 11.573C22.86 11.2658 23.0568 10.7739 22.9857 10.2825C22.9146 9.79109 22.5864 9.37492 22.1248 9.19072V9.19072Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill="none"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.64687 7.43818C6.58785 6.8597 6.64723 5.24653 5.7795 3.83507C4.91178 2.42361 3.44554 1.74835 2.50456 2.32683C1.56359 2.90531 1.50421 4.51848 2.37193 5.92994C3.23966 7.3414 4.7059 8.01667 5.64687 7.43818Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill="none"
          d="M6 8L7 9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill="none"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 15C4.32843 15 5 14.3284 5 13.5C5 12.6716 4.32843 12 3.5 12C2.67157 12 2 12.6716 2 13.5C2 14.3284 2.67157 15 3.5 15Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath>
          <path d="M0 0H24V24H0V0Z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default TennisPlayer
