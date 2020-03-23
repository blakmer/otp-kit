#### Input component

```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid
const [a, set] = React.useState(undefined)
;<Container>
  <Row>
    <button onClick={() => set('sss')}>111</button>
    <Col md={6}>
      <Input label="Label" value={a} />
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

#### Input with mask

```js
<Input mask="+7 (999) 999 99 99" maskChar="_" label="Your phone" />
```

#### Input fits to its parent width

```js
<Input label="Label" defaultValue="value" block />
```

#### Input with error message

```js
<Input
  label="Label"
  defaultValue="value"
  state="error"
  errorMessage="Поле обязательно для заполнения"
/>
```
