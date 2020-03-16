import React, { Fragment, useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import propTypes from 'prop-types'
import Typography from '../Typography'
import Grid from '../Grid'
import Icon from '../Icon'

import styles from './index.module.css'
import Medium from '../Icon/Medium'

const { Container, Row, Col } = Grid

const Notification = props => {
  const { type, message } = props
  const element = useRef(null)
  useEffect(() => {
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
        <Col md={8}>
          <div className={classnames(styles.notification, styles[type])}>
            <Icon.Medium type="info" fill="inverse" />
            <div className={styles.notificationText}>
              <Typography.Text color="inverse">{message}</Typography.Text>
            </div>
            <span className={styles.notificationClose} onClick={onCloseHandle}>
              <Icon.Small type="close" fill="inverse" />
            </span>
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
    success: message => {
      setMessages([...messages, { message, type: 'success' }])
    },
    error: message => {
      setMessages([...messages, { message, type: 'error' }])
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
