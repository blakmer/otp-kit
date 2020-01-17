#### Input component

```js
import Grid from '../../base/Grid'
const { Container, Row, Col } = Grid
;<Container>
  <Row>
    <Col md={6}>
      <Input />
    </Col>
    <Col md={6}>
      <Input state="disabled" />
    </Col>
    <Col md={6}>
      <Input state="error" />
    </Col>
    <Col md={6}>
      <Input state="warning" />
    </Col>
  </Row>
</Container>
```
