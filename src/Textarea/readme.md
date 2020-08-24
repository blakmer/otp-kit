### Textarea component

```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid
const [val, setVal] = React.useState('Controlled value')

;<Container>
  <Row>
    <Col md={12}>
      <Textarea
        maxLength={100}
        value={val}
        onChange={e => setVal(e.target.value)}
        block
      />
    </Col>
    <Col md={12}>
      <Textarea status="disabled" block />
    </Col>
    <Col md={12}>
      <Textarea
        status="error"
        defaultValue="Errorable and uncontrolled textarea"
        block
      />
    </Col>
    <Col md={12}>
      <Textarea status="warning" value="ReadOnly field and warning" block />
    </Col>
  </Row>
</Container>
```

### Textarea fits to its parent width

```js
;<Textarea block />
```
