import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

const AccordionElement = props => {
  const { index, title, body, active, onClick } = props
  return (
    <div className={classnames(styles.element)}>
      <div
        className={styles.title}
        style={title.style}
        onClick={() => onClick(index, active)}>
        {title.prefix}
        <span className={styles.content}>{title.content}</span>
        {title.suffix}
      </div>
      {active && <div className={styles.body}>{body.content}</div>}
    </div>
  )
}

const Accordion = props => {
  const {
    className,
    style,
    items,
    onChange,
    activeItem,
    defaultActiveItem,
  } = props

  const [act, setAct] = useState(defaultActiveItem)
  const handleChange = (index, active) => {
    active ? setAct(undefined) : setAct(items[index])
    onChange && onChange(index, items[index])
  }

  return (
    <div className={className} style={style}>
      {items.map((item, index) => {
        const active = activeItem
          ? item === activeItem
          : act
          ? item === act
          : false
        return (
          <AccordionElement
            key={`element ${index}`}
            index={index}
            title={item.title}
            body={item.body}
            active={active}
            onClick={activeItem ? onChange : handleChange}
          />
        )
      })}
    </div>
  )
}

Accordion.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
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
  activeItem: PropTypes.shape({
    title: PropTypes.shape({
      prefix: PropTypes.node,
      content: PropTypes.node,
      suffix: PropTypes.node,
      style: PropTypes.object,
    }).isRequired,
    body: PropTypes.shape({
      content: PropTypes.node,
      style: PropTypes.object,
    }).isRequired,
  }),
  /** Открытый элемент по умолчанию */
  defaultActiveItem: PropTypes.shape({
    title: PropTypes.shape({
      prefix: PropTypes.node,
      content: PropTypes.node,
      suffix: PropTypes.node,
      style: PropTypes.object,
    }).isRequired,
    body: PropTypes.shape({
      content: PropTypes.node,
      style: PropTypes.object,
    }).isRequired,
  }),
}

Accordion.defaultProps = {
  onChange: i => {},
  items: [],
}
export default Accordion
