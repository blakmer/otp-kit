import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import classes from '../classes.module.css'

const Filters = props => {
  const {
    className,
    style,
    header,
    position,
    show,
    overlay,
    onClose,
    padding,
    bgColor,
    children,
  } = props

  useEffect(() => {
    document.body.style.overflowY = overlay && show ? 'hidden' : 'auto'
  }, [show])

  const strPadding =
    Array.isArray(padding) && [1, 2, 4].includes(padding.length)
      ? padding.reduce((acc, i) => {
          return typeof i === 'number' ? `${acc} ${i}px` : `${acc} ${i}`
        }, '')
      : undefined

  return (
    <Fragment>
      <div
        className={classnames(
          styles.wrapper,
          classes[`${bgColor}-bg`],
          styles[position],
          className,
          {
            [styles.show]: show,
          }
        )}
        style={{ padding: strPadding, ...style }}>
        <div className={styles.header}>{header}</div>
        <div className={styles.content}>{children}</div>
      </div>
      {overlay && show && <div className={styles.overlay} onClick={onClose} />}
    </Fragment>
  )
}

Filters.propTypes = {
  /** Внутренние отступы: [10], [10, '2rem'], [2, 5, '3em', '5%'] */
  padding: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  /** Цвет фона */
  bgColor: PropTypes.string,
  /** Расположение сайдбара */
  position: PropTypes.oneOf(['right', 'left']),
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
  position: 'right',
  padding: [24],
  bgColor: 'bg-grey-2',
}

export default Filters
