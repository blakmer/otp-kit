import React from 'react'

const AlertTriangle = props => {
  const { hexFill } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15.75V8.25V15.75Z" fill={hexFill} />
      <path
        d="M12 15.75V8.25"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 18C12.6904 18 13.25 18.5596 13.25 19.25C13.25 19.9404 12.6904 20.5 12 20.5C11.3096 20.5 10.75 19.9404 10.75 19.25C10.75 18.5596 11.3096 18 12 18Z"
        fill={hexFill}
      />
      <path
        d="M13.5851 1.98771V1.98771C13.1551 1.11236 12.097 0.75131 11.2216 1.18128C10.871 1.3535 10.5874 1.63711 10.4152 1.98771L1.15287 20.8567V20.8567C0.790531 21.5938 1.09433 22.4851 1.83143 22.8475C2.03588 22.948 2.26068 23.0002 2.4885 23H21.5118V23C22.3332 23.0005 22.9995 22.3351 23 21.5138C23.0002 21.286 22.948 21.0612 22.8475 20.8567L13.5851 1.98771Z"
        stroke={hexFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default AlertTriangle
