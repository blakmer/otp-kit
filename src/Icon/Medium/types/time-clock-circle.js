import React from 'react'

const TimeClockCircle = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <mask id="path-2-inside-1" fill="white">
        <path d="M19.7782 4.22183C24.0739 8.51761 24.0739 15.4824 19.7782 19.7782C15.4824 24.0739 8.5176 24.0739 4.22183 19.7782C-0.0739448 15.4824 -0.0739448 8.5176 4.22183 4.22183C8.51761 -0.0739448 15.4824 -0.0739448 19.7782 4.22183Z" />
      </mask>
      <path
        d="M21.1924 2.80762C20.4113 2.02657 19.145 2.02657 18.364 2.80762C17.5829 3.58867 17.5829 4.855 18.364 5.63605L21.1924 2.80762ZM19.7782 19.7782L18.364 18.3639L18.364 18.364L19.7782 19.7782ZM4.22183 19.7782L5.63605 18.364L5.63605 18.364L4.22183 19.7782ZM4.22183 4.22183L5.63605 5.63605L5.63605 5.63605L4.22183 4.22183ZM18.364 5.63605C19.145 6.4171 20.4113 6.4171 21.1924 5.63605C21.9734 4.855 21.9734 3.58867 21.1924 2.80762L18.364 5.63605ZM18.364 5.63605C21.8787 9.15078 21.8787 14.8492 18.364 18.3639L21.1924 21.1924C26.2692 16.1156 26.2692 7.88445 21.1924 2.80762L18.364 5.63605ZM18.364 18.364C14.8492 21.8787 9.15077 21.8787 5.63605 18.364L2.80762 21.1924C7.88444 26.2692 16.1156 26.2692 21.1924 21.1924L18.364 18.364ZM5.63605 18.364C2.12132 14.8492 2.12132 9.15077 5.63605 5.63605L2.80762 2.80762C-2.26921 7.88444 -2.26921 16.1156 2.80762 21.1924L5.63605 18.364ZM5.63605 5.63605C9.15078 2.12132 14.8492 2.12132 18.364 5.63605L21.1924 2.80762C16.1156 -2.26921 7.88445 -2.26921 2.80762 2.80762L5.63605 5.63605Z"
        fill="#1B1F27"
        mask="url(#path-2-inside-1)"
      />
      <path
        d="M12 12V8"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12L16 16"
        stroke="#1B1F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TimeClockCircle
