import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import classes from '../classes.module.css'

const AccordionElement = ({
  index,
  title,
  body,
  active,
  onClick,
  titleBg,
  size,
  contentBg,
  classNameElement,
}) => {
  return (
    <div
      className={classnames(
        classNameElement,
        styles.element,
        styles[size],
        classes[`${contentBg}-bg`]
      )}>
      <div
        className={classnames(styles.title, classes[`${titleBg}-bg`])}
        style={title.style}
        onClick={() => onClick(index, active)}>
        {title.prefix}
        <span className={styles.content}>{title.content}</span>
        {title.suffix}
      </div>
      {body && (
        <div
          className={classnames(
            styles.body,
            active ? styles.show : styles.hide
          )}
          style={{ maxHeight: active ? '200vh' : '0px' }}>
          <div className={styles.contentBody}>{body.content}</div>
        </div>
      )}
    </div>
  )
}

const Accordion = props => {
  const {
    className,
    classNameElement,
    style,
    items,
    onChange,
    activeItems,
    defaultActiveItems,
    titleBg,
    size,
    contentBg,
  } = props

  const [act, setAct] = useState(defaultActiveItems || [])

  const handleChange = (index, active) => {
    active
      ? setAct(
          act.filter((e, i) => {
            return e !== index
          })
        )
      : setAct([...act, index])
  }

  return (
    <div className={className} style={style}>
      {items.map((item, index) => {
        const active = activeItems
          ? activeItems.indexOf(index) >= 0
          : act.indexOf(index) >= 0
        return (
          <AccordionElement
            key={`element ${index}`}
            index={index}
            titleBg={titleBg}
            contentBg={contentBg}
            classNameElement={classNameElement}
            size={size}
            title={item.title}
            body={item.body}
            active={active}
            onClick={activeItems ? onChange : handleChange}
          />
        )
      })}
    </div>
  )
}

Accordion.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'default']),
  onChange: PropTypes.func,
  /** Окрашивание заголовка в цвет из списка цветов */
  titleBg: PropTypes.string,
  /** Окрашивание контента в цвет из списка цветов */
  contentBg: PropTypes.string,
  /** Элементы аккордеона */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** Заголовок */
      title: PropTypes.shape({
        /** Левая часть заголовка */
        prefix: PropTypes.node,
        /** Контент заголовка */
        content: PropTypes.node,
        /** Правая часть заголовка */
        suffix: PropTypes.node,
        /** Стили заголовка */
        style: PropTypes.object,
      }).isRequired,
      /** Выплывающая часть */
      body: PropTypes.shape({
        /** Контент выплывающей части */
        content: PropTypes.node,
        /** Стили выплывающей части */
        style: PropTypes.object,
      }).isRequired,
    })
  ),
  /** Открытый элемент */
  activeItems: PropTypes.arrayOf(PropTypes.number),
  /** Открытый элемент по умолчанию */
  defaultActiveItems: PropTypes.arrayOf(PropTypes.number),
}

Accordion.defaultProps = {
  onChange: i => {},
  size: 'default',
  items: [],
  titleBg: 'transparent',
  contentBg: 'transparent',
}
export default Accordion
