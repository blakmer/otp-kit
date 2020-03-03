import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import Typography from '../Typography'

const Cards = props => {
  const { img, body, header, footer, shadow, className, style } = props

  return (
    <div
      style={style}
      className={classnames(
        styles.card,
        shadow ? styles.cardShadow : '',
        className
      )}>
      {typeof img !== 'undefined' && (
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${img})` }}
        />
      )}
      <div className={styles.body}>
        <div className={styles.header}>
          <Typography.Heading level={2}>{header}</Typography.Heading>
        </div>
        <div>{body}</div>
        <div>{footer}</div>
      </div>
    </div>
  )
}

Cards.propTypes = {
  img: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  shadow: PropTypes.bool,
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
}

export default Cards
