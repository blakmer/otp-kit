#### Input component

```js
import Grid from '../../base/Grid'
const { Container, Row, Col } = Grid
;<Container>
  <Row>
    <Col md={6} style={{ padding: 5 }}>
      <Input />
    </Col>
    <Col md={6} style={{ padding: 5 }}>
      <Input state="disabled" />
    </Col>
    <Col md={6} style={{ padding: 5 }}>
      <Input state="error" />
    </Col>
    <Col md={6} style={{ padding: 5 }}>
      <Input state="warning" />
    </Col>
  </Row>
</Container>
```
