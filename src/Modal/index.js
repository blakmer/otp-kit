import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from '../Button'
import RoundButton from '../RoundButton'
import Grid from '../Grid'
import Typography from '../Typography'

const { Container, Row, Col } = Grid

import styles from './index.module.css'

const SIZES = {
  small: 6,
  medium: 8,
  large: 10,
}

const Modal = props => {
  const {
    size,
    closable,
    header,
    body,
    okText,
    onOk,
    cancelText,
    onCancel,
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

  return open ? (
    <section className={classnames(styles.modalCanvas)}>
      <Container fluid>
        <Row
          justify="center"
          align="center"
          style={{ width: '100vw', height: '100vh' }}
          data-role="modal"
          onClick={e => {
            if (e.target.dataset.role === 'modal')
              closable && handleClick(onClose)
          }}>
          <Col xs={12} md={SIZES[size]}>
            <div className={classnames(styles.modal)}>
              <section className={styles.header}>
                <Typography.Lead highlighted>{header}</Typography.Lead>
                <RoundButton
                  icon="close"
                  inverse
                  onClick={() => handleClick(onClose)}
                />
              </section>
              <section className={styles.body}>{body}</section>
              <section className={styles.footer}>
                {onCancel && (
                  <Button ghost onClick={() => handleClick(onCancel)}>
                    {cancelText}
                  </Button>
                )}
                {onOk && (
                  <Button onClick={() => handleClick(onOk)}>{okText}</Button>
                )}
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  ) : null
}

Modal.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  closable: PropTypes.bool,
  header: PropTypes.node,
  body: PropTypes.node,
  okText: PropTypes.string,
  onOk: PropTypes.func,
  cancelText: PropTypes.string,
  onCancel: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
}

Modal.defaultProps = {
  size: 'medium',
  closable: true,
  okText: 'ok',
  cancelText: 'cancel',
  isOpen: false,
}

export default Modal
