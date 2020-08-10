#### Notification

```js
import React, { Fragment } from 'react'
import Grid from '../Grid'
import Button from '../Button'
import NotificationContainer, { store } from './'
const { Container, Row, Col } = Grid

  const handleClick = (type, position) => {
    store.addNotification({
    message: "Nisi exercitation occaecat cillum nulla excepteur incididunt cillum consectetur ea ea do. Tempor laborum laboris amet et consectetur aliquip excepteur dolor sint Sunt magna quis non ut nulla aute.",
    type: type,
    insert: "top",
    container: position,
    dismiss: {
      duration: 2000,
      onScreen: false,
      showIcon: true,
    }
    })}

; 
  <Container>
    <NotificationContainer/>
      <Row>
        <Col md={4}>
          <Button 
            fill="primary"
            onClick={() => handleClick("success", "top-center")}
            ghost
            >
          Success
          </Button>
        </Col>
        <Col md={4}>
          <Button 
            fill="error"
            onClick={() => handleClick("error", "top-center")}
            ghost
            >
          Error
          </Button>
        </Col>
        <Col md={4}>
          <Button 
            fill="primary"
            onClick={() => handleClick("error", "top-right")}
            ghost
            >
          Top right
          </Button>
        </Col>
        <Col md={4}>
          <Button 
            fill="primary"
            onClick={() => handleClick("error", "top-left")}
            ghost
            >
          Top left
          </Button>
        </Col>
      </Row>
    </Container>
  

```
