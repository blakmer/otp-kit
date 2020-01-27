#### Icon types

```js
import Grid from '../Grid'

const { Container, Row, Col } = Grid

;<Container>
  <Row>
    <Col style={{ textAlign: 'center' }} md={1}>
      <Icon type='arrow-right' />
      <div>arrow-right</div>
    </Col>
    <Col style={{ textAlign: 'center' }} md={1}>
      <Icon type='arrow-left' />
      <div>arrow-left</div>
    </Col>
    <Col style={{ textAlign: 'center' }} md={1}>
      <Icon type='arrow-down' />
      <div>arrow-down</div>
    </Col>
    <Col style={{ textAlign: 'center' }} md={1}>
      <Icon type='arrow-up'/>
      <div>arrow-up</div>
    </Col>
  </Row>
</Container>
```