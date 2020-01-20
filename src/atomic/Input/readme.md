#### Input component

```js
import Grid from '../../base/Grid'
const { Container, Row, Col } = Grid
;<Container>
  <Row>
    <Col md={6}>
      <Input
        label="Label"
        onChange={e => console.log(e.target.value)}
        value="value"
      />
    </Col>
    <Col md={6}>
      <Input state="disabled" label="Disabled input" />
    </Col>
    <Col md={6}>
      <Input state="error" label="Errorable input" />
    </Col>
    <Col md={6}>
      <Input state="warning" label="Warn input" />
    </Col>
  </Row>
</Container>
```
