#### Input component

```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid
;<Container>
  <Row>
    <Col md={6}>
      <Input label="Label" />
    </Col>
    <Col md={6}>
      <Input status="disabled" label="Disabled input" />
    </Col>
    <Col md={6}>
      <Input status="error" label="Errorable input" />
    </Col>
    <Col md={6}>
      <Input status="warning" label="Warn input" />
    </Col>
  </Row>
</Container>
```

```js
<Input label="Input with suffix" suffix="arrow-down" />
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
const [a, set] = React.useState('sss')
;<>
  <button onClick={() => set('')}>Reset value</button>
  <Input
    readOnly
    label="Label"
    value={a}
    status="error"
    errorMessage="Поле обязательно для заполнения"
  />
</>
```
