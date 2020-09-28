import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Arrow from '../util/arrow'
import styles from './index.module.css'
import classes from '../classes.module.css'
const POSITIONS = ['bottomRight', 'bottomCenter', 'bottomLeft']

const FormTooltip = props => {
  const {
    className,
    style,
    children,
    content,
    position,
    fill,
    textFill,
    visible,
  } = props

  const block = children.props && children.props.block
  return (
    <div
      className={classnames(
        styles.contentContainer,
        block && styles.block,
        className
      )}
      style={style}>
      <div className={styles.childContainer}>{children}</div>
      {visible && content && (
        <div
          className={classnames(
            styles.formTooltip,
            styles[status],
            styles[position],
            classes[`${fill}-bg`],
            classes[`${textFill}-text`]
          )}>
          {content}
          <span className={classnames(styles.tooltipArrow, styles[position])}>
            <Arrow fill={`${fill}`} />
          </span>
        </div>
      )}
    </div>
  )
}

FormTooltip.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  /** Дочерний элемент */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /** Элементы во всплывающем меню */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /** Окрашивание в цвет из списка цветов */
  fill: PropTypes.string,
  /** Окрашивание элементов внутри */
  textFill: PropTypes.string,
  /** Направление всплывающего меню */
  position: PropTypes.oneOf(POSITIONS),
  /** Управление отображением элемента снаружи */
  visible: PropTypes.bool,
}

FormTooltip.defaultProps = {
  position: 'bottomCenter',
  fill: 'bg-pastel-red',
  textFill: 'text-primary',
}

export default FormTooltip
