#### Link Component
```js

import Grid from '../../base/Grid'
const {Container, Row, Col} = Grid
;<Container>
  <Row>
    <Col md={4}>
        <Link>Default Link</Link>
    </Col>
    <Col md={4}>
        <Link variation="blue">Blue Link</Link>
    </Col>
    <Col md={4}>
        <Link variation="error">Error Link</Link>
    </Col>
    <Col md={4}>
        <Link variation="primary" prefix="arrow-left">Link with prefix</Link>
    </Col>
    <Col md={4}>
        <Link suffix="arrow-right">Link with suffix</Link>
    </Col>
  </Row>
</Container>