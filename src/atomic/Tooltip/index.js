import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.module.css'

const Tooltip = props => {
  console.log(styles)
  return (
    <div className={styles.tooltipContainer}>
      <div className={classnames(styles.tooltip)}>
        Content of tooltip
        <span className={styles.tooltipArrow}>
          <svg
            width="24"
            height="12"
            viewBox="0 0 24 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.317 10.0295C14.0814 11.1351 13.1305 12 12 12C10.8695 12 9.91856 11.1351 9.683 10.0295C8.95754 6.62438 6.68689 0 0 0H24C17.3131 0 15.0425 6.62438 14.317 10.0295Z"
              fill="#1B82E3"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

Tooltip.propTypes = {}

Tooltip.defaultProps = {}

export default Tooltip
