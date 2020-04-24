import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from '../Button'
import RoundButton from '../RoundButton'
import Grid from '../Grid'
import Typography from '../Typography'

const { Container, Row, Col } = Grid

import styles from './index.module.css'

const Modal = props => {
  const {
    size,
    closable,
    header,
    body,
    okConfig,
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
          <Col {...size}>
            <div className={classnames(styles.modal)}>
              <section className={styles.header}>
                <Typography.Lead highlighted>{header}</Typography.Lead>
                <RoundButton
                  icon="close"
                  fill="bg-input"
                  iconFill="primary"
                  onClick={() => handleClick(onClose)}
                />
              </section>
              <section className={styles.body}>{body}</section>
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  ) : null
}

Modal.propTypes = {
  size: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  closable: PropTypes.bool,
  header: PropTypes.node,
  body: PropTypes.node,
  okConfig: PropTypes.object,
  cancelConfig: PropTypes.object,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
}

Modal.defaultProps = {
  size: {},
  closable: true,
  isOpen: false,
}

export default Modal
