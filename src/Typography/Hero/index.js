import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import classes from '../../classes.module.css'
import styles from './index.module.css'

const Hero = props => {
  const { children, align, style, className, sub, fill, ...otherProps } = props
  return (
    <h1
      align={align}
      className={classnames(
        className,
        classes[`${fill}-text`],
        sub ? styles.subHero : styles.hero
      )}
      style={style}
      {...otherProps}>
      {children}
    </h1>
  )
}

Hero.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  style: PropTypes.object,
  sub: PropTypes.bool,
  fill: PropTypes.string,
}

Hero.defaultProps = {
  sub: false,
  align: 'left',
  fill: 'text-primary',
}

export default Hero
