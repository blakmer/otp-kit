import React, { Fragment, useEffect } from 'react'
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
    overlay,
    onClose,
  } = props

  useEffect(() => {
    document.body.style.overflowY = overlay && show ? 'hidden' : 'auto'
  }, [show])

  return (
    <Fragment>
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
      {overlay && show && <div className={styles.overlay} onClick={onClose} />}
    </Fragment>
  )
}

Filters.propTypes = {
  header: PropTypes.node,
  topContent: PropTypes.node,
  midContent: PropTypes.node,
  bottomContent: PropTypes.node,
  /** Управление открытием элемента */
  show: PropTypes.bool,
  /** Если true, то Filters можно будет закрыть нажатием по прозрачному оверлэю, который покрывает весь остальной контент, пока открыт Filters. Также запрещается прокрутка body, пока Filters открыт. */
  overlay: PropTypes.bool,
  /** Если пропс overlay === true, то эта функция позволит закрывать Filters кликом по прозрачному оверлэю. */
  onClose: PropTypes.func,
}

Filters.defaultProps = {
  show: false,
  overlay: false,
}

export default Filters
