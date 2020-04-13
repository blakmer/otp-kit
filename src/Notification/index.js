import React, { Fragment, useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import propTypes from 'prop-types'
import Typography from '../Typography'
import Grid from '../Grid'
import Icon from '../Icon'

import styles from './index.module.css'

const { Container, Row, Col } = Grid

const Notification = props => {
  const { type, message, popup } = props
  const element = useRef(null)
  useEffect(() => {
    if (popup) {
      element.current.style.transform = 'translateX(-1000px)'
    }
    setTimeout(() => {
      element.current.style.transform = 'translateX(9999px)'
      setTimeout(() => {
        element.current.parentNode &&
          element.current.parentNode.removeChild(element.current)
      }, 500)
    }, 3000)
  }, [])

  const onCloseHandle = () => {
    element.current.parentNode.removeChild(element.current)
  }

  return (
    <div ref={element} className={styles.notificationWrapped}>
      <Row justify="center">
        <Col md={popup ? 12 : 8}>
          <div
            className={classnames(
              popup ? styles.popup : styles.notification,
              styles[type]
            )}>
            <Icon.Medium type="info" fill="text-inverse" />
            <div className={styles.notificationText}>
              <Typography.Text color="inverse">{message}</Typography.Text>
            </div>
            {!popup && (
              <span
                className={styles.notificationClose}
                onClick={onCloseHandle}>
                <Icon.Small type="close" fill="text-inverse" />
              </span>
            )}
          </div>
        </Col>
      </Row>
    </div>
  )
}

const NotificationProvider = props => {
  const { children } = props
  const [messages, setMessages] = useState([])

  const showNotification = {
    success: (message, popup) => {
      setMessages([...messages, { message, type: 'success', popup }])
    },
    error: (message, popup) => {
      setMessages([...messages, { message, type: 'error', popup }])
    },
  }

  return (
    <Fragment>
      <div className={classnames(styles.notificationProvider)}>
        <Container fluid>
          {messages.map((i, j) => (
            <Notification {...i} key={j} />
          ))}
        </Container>
      </div>

      {children(showNotification)}
    </Fragment>
  )
}

NotificationProvider.propTypes = {
  children: propTypes.func.isRequired,
}

export default NotificationProvider
