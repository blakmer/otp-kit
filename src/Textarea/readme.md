```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid
;<Container>
  <Row>
    <Col md={6}>
      <Textarea label="Отъезжающий лабель" />
    </Col>
    <Col md={6}>
      <Textarea label="Disabled" disabled />
    </Col>
    <Col md={6}>
      <Textarea label="Error" status="error" />
    </Col>
    <Col md={6}>
      <Textarea label="Warning" status="warning" />
    </Col>
    <Col md={6}>
      <Textarea label="With value" value="Hello, Meow, Woof" />
    </Col>
  </Row>
</Container>
```
