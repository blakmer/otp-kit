import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import classes from '../classes.module.css'
import Typography from '../Typography'

const ORIENTATIONS = {
  left: 'left',
  center: 'center',
  right: 'right',
}

const Divider = props => {
  const {
    className,
    children,
    orientation,
    fill,
    style,
    dashed,
    type,
    childFill,
    lineLength,
  } = props
  const orient = ORIENTATIONS[orientation] ? orientation : 'center'
  const renderHorisontal = () => {
    return (
      <div
        className={classnames(
          styles.divider,
          styles.horisontal,
          children ? styles[orient] : styles.empty,
          dashed && styles.dashed,
          classes[`${fill}-border-before`],
          classes[`${fill}-border-after`],
          className
        )}
        style={{
          ...style,
          width:
            lineLength && typeof lineLength === 'number'
              ? `${lineLength} px`
              : lineLength,
        }}>
        {children && (
          <Typography.Text fill={childFill}>{children}</Typography.Text>
        )}
      </div>
    )
  }
  const renderVertical = () => {
    return (
      <div
        className={classnames(
          styles.divider,
          styles.vertical,
          classes[`${fill}-border-before`],
          className
        )}
        style={{
          ...style,
          height:
            lineLength && typeof lineLength === 'number'
              ? `${lineLength} px`
              : lineLength,
        }}
      />
    )
  }

  return type === 'vertical' ? renderVertical() : renderHorisontal()
}

Divider.propTypes = {
  className: PropTypes.string,
  /** Отображение дочернего элемента относительно разделителя */
  orientation: PropTypes.oneOf(Object.keys(ORIENTATIONS)),
  /** Окрашивание в цвет из списка цветов */
  fill: PropTypes.string,
  style: PropTypes.object,
  /** Добавление прерывистых линий */
  dashed: PropTypes.bool,
  /** Направление линии */
  type: PropTypes.oneOf(['horisontal', 'vertical']),
  /** Дочерний элемент */
  children: PropTypes.node,
  /** Окрашивание дочернего элемента в цвет из списка цветов */
  childFill: PropTypes.string,
}

Divider.defaultProps = {
  orientation: 'center',
  fill: 'bg-grey-2',
  childFill: 'text-secondary',
  type: 'horisontal',
}

export default Divider
