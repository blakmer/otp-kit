### Textarea component

```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid
;<Container>
  <Row>
    <Col md={6}>
      <Textarea label="Отъезжающий лабель" maxLength={100} />
    </Col>
    <Col md={6}>
      <Textarea label="Disabled" disabled />
    </Col>
    <Col md={6}>
      <Textarea label="Error" status="error" />
    </Col>
    <Col md={6}>
      <Textarea label="Warning" status="warning" />
    </Col>
    <Col md={6}>
      <Textarea label="With value" value="Hello, Meow, Woof" />
    </Col>
    <Col md={6}>
      <Textarea
        label="Stretch height"
        value="Напиши что-нибудь подлиннее"
        maxLength={100}
        stretchHeight
      />
    </Col>
  </Row>
</Container>
```

### Textarea fits to its parent width

```js
;<Textarea label="Отъезжающий лабель" maxLength={100} block />
```

### Textarea with error message

```js
;<Textarea
  label="Отъезжающий лабель"
  status="error"
  maxLength={100}
  errorMessage="Поле обязательно для заполнения"
/>
```
