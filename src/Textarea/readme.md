### Textarea component

```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid
const [val, setVal] = React.useState('controlled value')

;<Container>
  <Row>
    <Col md={6}>
      <Textarea
        maxLength={100}
        value={val}
        onChange={e => setVal(e.target.value)}
      />
    </Col>
    <Col md={6}>
      <Textarea status="disabled" />
    </Col>
    <Col md={6}>
      <Textarea
        status="error"
        defaultValue="errorable and uncontrolled textarea"
      />
    </Col>
    <Col md={6}>
      <Textarea status="warning" value="readOnly field and warning" />
    </Col>
  </Row>
</Container>
```

### Textarea fits to its parent width

```js
;<Textarea block />
```
