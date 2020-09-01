import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from '../Button'
import RoundButton from '../RoundButton'
import Grid from '../Grid'
import classes from '../classes.module.css'

const { Container, Row, Col } = Grid

import styles from './index.module.css'

const Modal = props => {
  const {
    className,
    style,
    size,
    closable,
    header,
    body,
    padding,
    okConfig,
    bgColor,
    cancelConfig,
    onOpen,
    onClose,
    isOpen,
  } = props

  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
    if (isOpen && onOpen) onOpen()
  }, [isOpen])

  const handleClick = handler => {
    setOpen(false)
    handler && handler()
  }
  const strPadding = typeof padding === 'number' ? `${padding}px` : padding
  return open ? (
    <section className={classnames(styles.modalCanvas, className)}>
      <Container fluid style={style}>
        <Row
          justify="center"
          align="center"
          style={{ width: '100vw', height: '100vh' }}
          data-role="modal"
          onClick={e => {
            if (e.target.dataset.role === 'modal')
              closable && handleClick(onClose)
          }}>
          <Col {...size}>
            <div
              className={classnames(styles.modal, classes[`${bgColor}-bg`])}
              style={{ padding: strPadding }}>
              <section className={styles.header}>
                {header}
                <RoundButton
                  className={styles.closeButton}
                  icon="close"
                  shadow={bgColor === 'white' ? 'small' : 'none'}
                  fill="bg-input"
                  iconFill="primary"
                  onClick={() => handleClick(onClose)}
                />
              </section>
              <section className={styles.body}>{body}</section>
              {(cancelConfig || okConfig) && (
                <section className={styles.footer}>
                  {cancelConfig && (
                    <Button
                      ghost
                      {...cancelConfig}
                      onClick={() => handleClick(cancelConfig.onClick)}
                    />
                  )}
                  {okConfig && (
                    <Button
                      {...okConfig}
                      onClick={() => handleClick(okConfig.onClick)}
                    />
                  )}
                </section>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  ) : null
}

Modal.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  /** Размер модального окна */
  size: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  /** Отображение кнопки закрыть */
  closable: PropTypes.bool,
  header: PropTypes.node,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  body: PropTypes.node,
  /** Окрашивание фона в цвет из списка цветов */
  bgColor: PropTypes.string,
  /** Конфигурация кнопки Ок */
  okConfig: PropTypes.object,
  /** Конфигурация кнопки Отмена */
  cancelConfig: PropTypes.object,
  /** Действие при открытии модального окна */
  onOpen: PropTypes.func,
  /** Действие при закрытии модального окна */
  onClose: PropTypes.func,
  /** Управление отображением модального окна */
  isOpen: PropTypes.bool,
}

Modal.defaultProps = {
  size: {},
  closable: true,
  padding: 24,
  isOpen: false,
  bgColor: 'bg-grey-3',
}

export default Modal
