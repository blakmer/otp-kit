import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.css'

const Locker = props => {
  const { active, onChange } = props

  return (
    <button
      className={classnames(styles.lockerContainer)}
      onClick={() => onChange(!active)}>
      <svg width="28" height="24" viewBox="0 0 28 24">
        <g transform="translate(1)">
          <rect
            className={classnames(styles.rect)}
            width="24"
            height="24"
            transform="translate(3)"
          />
          <g transform="translate(6)">
            <path
              className={classnames(
                styles.rect,
                styles.block,
                styles[active ? 'unlock' : 'lock']
              )}
              d="M2.455,23A1.45,1.45,0,0,1,1,21.556V11.444A1.45,1.45,0,0,1,2.455,10H15.545A1.449,1.449,0,0,1,17,11.444V21.556A1.449,1.449,0,0,1,15.545,23Z"
            />
            <path
              className={classnames(
                styles.rect,
                styles.dot,
                styles[active ? 'unlock' : 'lock']
              )}
              d="M9,15v3"
            />
            <g>
              <path
                className={classnames(
                  styles.rect,
                  styles.shackle,
                  styles[active ? 'unlock' : 'lock']
                )}
                d="M4,10V6.25H4A5.13,5.13,0,0,1,9,1a5.13,5.13,0,0,1,5,5.25h0V10"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
  )
}

Locker.propTypes = {
  active: PropTypes.bool,
  onChange: PropTypes.func,
}

Locker.defaultProps = {
  active: false,
  onChange: active => {},
}

export default Locker
