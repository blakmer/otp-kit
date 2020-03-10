import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

const Filters = props => {
  const {
    className,
    style,
    header,
    topContent,
    midContent,
    bottomContent,
    show,
  } = props

  return (
    <div
      className={classnames(styles.wrapper, className, {
        [styles.show]: show,
      })}
      style={style}>
      <header className={styles.header}>{header}</header>
      <div className={styles.topContent}>{topContent}</div>
      <div className={styles.divider} />
      <div className={styles.midContent}>{midContent}</div>
      <div className={styles.divider} />
      <div className={styles.bottomContent}>{bottomContent}</div>
    </div>
  )
}

Filters.propTypes = {
  header: PropTypes.node,
  topContent: PropTypes.node,
  midContent: PropTypes.node,
  bottomContent: PropTypes.node,
  show: PropTypes.bool,
}

Filters.defaultProps = {
  header: <p>Шапка</p>,
  topContent: <p>Верхний контент</p>,
  midContent: <p>Средний контент</p>,
  bottomContent: <p>Нижний контент</p>,
  show: false,
}

export default Filters
