import React from 'react'
import classnames from 'classnames'
import classes from '../classes.module.css'
import propTypes from 'prop-types'
import GetFillFromExt from './fills-from-ext'

const IconDoc = props => {
  const { className, style, fill, children, onClick, size } = props
  const color = fill || GetFillFromExt(children)

  const ICONS = {
    default: (
      <svg
        className={classnames(
          classes[`${color}-stroke`],
          classes[`${color}-fill`],
          className
        )}
        onClick={onClick}
        style={style}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <text
          textAnchor="middle"
          x="12"
          y="17"
          style={{ fontSize: '.5rem', userSelect: 'none' }}>
          {children}
        </text>
        <path
          fill="none"
          d="M23 21.533C22.9857 21.9357 22.8122 22.3162 22.5177 22.5912C22.2232 22.8662 21.8317 23.0132 21.429 23H2.571C2.16829 23.0132 1.77676 22.8662 1.48227 22.5912C1.18777 22.3162 1.01434 21.9357 1 21.533V2.467C1.01434 2.06432 1.18777 1.68377 1.48227 1.40877C1.77676 1.13377 2.16829 0.98677 2.571 0.999997H18.333C18.7388 0.997417 19.1309 1.14608 19.433 1.417L22.528 4.236C22.6756 4.36836 22.7939 4.53018 22.8752 4.71102C22.9565 4.89186 22.999 5.08772 23 5.286V21.533Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill="none"
          d="M17 1V5.392C17 5.81847 17.1694 6.22747 17.471 6.52903C17.7725 6.83059 18.1815 7 18.608 7H23"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    large: (
      <svg
        className={classnames(
          classes[`${color}-stroke`],
          classes[`${color}-fill`],
          className
        )}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <text
          textAnchor="middle"
          x="24"
          y="34"
          style={{
            fontSize: '1rem',
            userSelect: 'none',
          }}>
          {children}
        </text>
        <path
          d="M33.55 2.01001C34.51 2.01001 35.4201 2.39993 36.0901 3.07977L42.9501 10.0982C43.6201 10.788 44.0001 11.7178 44.0001 12.6776V42.9407C44.0101 44.6203 42.65 45.99 40.97 46L7.03008 45.98C5.35008 45.97 3.99005 44.6003 4.00005 42.9207V5.0593C3.99005 3.37968 5.35008 2.01 7.03008 2H33.55V2.01001Z"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 2.01001V11.008C32 12.6676 33.34 14.0073 35 14.0073H44"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  }

  return ICONS[size]
}

IconDoc.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  fill: propTypes.string,
  children: propTypes.node,
  onClick: propTypes.func,
}

IconDoc.defaultProps = {
  onClick: e => {},
  size: 'default',
}

export default IconDoc
