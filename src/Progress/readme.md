#### Progress component

```js
import Grid from '../Grid'

const { Container, Row, Col } = Grid

;<Container>
  <Row>
    <Col>
      <Progress value={0} max={842} />
    </Col>
    <Col>
      <Progress value={401} max={842} />
    </Col>
    <Col>
      <Progress value={842} max={842} />
    </Col>
  </Row>
</Container>
```
