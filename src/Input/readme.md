#### Input component

```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid
;<Container>
  <Row>
    <Col md={6}>
      <Input defaultValue="name" />
    </Col>
    <Col md={6}>
      <Input status="disabled" defaultValue="disabled" />
    </Col>
    <Col md={6}>
      <Input status="error" defaultValue="error info" />
    </Col>
    <Col md={6}>
      <Input status="warning" defaultValue="warning" />
    </Col>
  </Row>
</Container>
```

#### Input with suffix and prefix

```js
<Input
  suffix={<span style={{ lineHeight: '3rem' }}>suf</span>}
  prefix={<span style={{ lineHeight: '3rem' }}>pre</span>}
/>
```

#### Input fits to its parent width

```js
<Input defaultValue="value" block />
```
