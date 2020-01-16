import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.module.css'

const Hero = props => {
  const { children, align, style, className, sub, color, ...otherProps } = props
  return (
    <h1
      align={align}
      className={classnames(
        className,
        styles[color],
        sub ? styles.subHero : styles.hero
      )}
      style={style}
      {...otherProps}>
      {children}
    </h1>
  )
}

Hero.propTypes = {
  children: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  style: PropTypes.object,
  sub: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'disabled', 'inverse']),
}

Hero.defaultProps = {
  sub: false,
  align: 'left',
  color: 'primary',
}

export default Hero
