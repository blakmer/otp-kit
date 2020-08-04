```js
import React, { useState } from 'react'
import Grid from '../Grid'
const { Container, Row, Col } = Grid
const column = {display: 'flex', flexDirection: 'column', alignItems: 'center'}

const [ticked, setTicked] = useState(false)

const mt = 15

;<Container>
  <Row>
    <Col md={4} style={column}>
       <i>Large</i>
      <Avatar genAvatarPath="Awesome avatar" />
    </Col>
     <Col md={4} style={column}>
      <i>Medium</i>
      <Avatar genAvatarPath="Awesome avatar" size="medium"/>
    </Col>
     <Col md={4} style={column}>
      <i>Small</i>
      <Avatar genAvatarPath="Awesome avatar" size="small"/>
    </Col>
  </Row>
  <Row style={{marginTop: mt}}>
    <Col md={4} style={column}>
      <i>With icon</i>
      <Avatar 
        iconName="error-state" 
        iconFill="notification-error"
        bgContent="bg-pastel-red"
      />
    </Col>
    <Col md={4} style={column}>
      <i>Custom icon fill</i>
      <Avatar 
        iconName="hourglass" 
        iconFill="highlighted"
        bgContent="bg-pastel-orange"
      />
    </Col>
    <Col md={4} style={column}>
      <i>Custom bg color</i>
      <Avatar 
        iconName="tick" 
        iconFill="primary"
        bgContent="bg-pastel-green"
      />
    </Col>
  </Row>
  <Row style={{marginTop: mt}}>
    <Col md={4} style={column}>
    <i>Selectable avatar</i>
      <Avatar 
        iconName="edit-user" 
        selectable 
        ticked={ticked}
        onChange={() => setTicked(!ticked)}
      />
    </Col>
    <Col md={4} style={column}>
    <i>With photo</i>
    <Avatar 
    src="https://image.shutterstock.com/z/stock-photo-portrait-of-african-american-boy-swimming-underwater-with-mask-126174812.jpg"/
    >
  </Col>
      <Col md={4} style={column}>
      <i>Border color</i>
      <Avatar 
        iconName="tick" 
        iconFill="primary"
        bgContent="white"
        borderColor="bg-grey-2"
      />
    </Col>
  </Row>
</Container>
```
