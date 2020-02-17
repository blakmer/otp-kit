##### Standart select

```js
<Select
  items={[
    { title: 'one', value: 1 },
    { title: 'two', value: 2 },
  ]}
  label="numbers"
  onChange={val => console.log(val)}
/>
```

##### Select without filters

```js
<Select
  items={[
    { title: 'one', value: 1 },
    { title: 'two', value: 2 },
  ]}
  label="numbers"
  filtered={false}
  onChange={val => console.log(val)}
/>
```

##### States of select

```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid
;<Container>
  <Row>
    <Col md={4}>
      <Select
        status="error"
        items={[
          { title: 'one', value: 1 },
          { title: 'two', value: 2 },
        ]}
        label="numbers"
        filtered={false}
        onChange={val => console.log(val)}
      />
    </Col>
    <Col md={4}>
      <Select
        status="warning"
        items={[
          { title: 'one', value: 1 },
          { title: 'two', value: 2 },
        ]}
        label="numbers"
        filtered={false}
        onChange={val => console.log(val)}
      />
    </Col>
    <Col md={4}>
      <Select
        status="disabled"
        items={[
          { title: 'one', value: 1 },
          { title: 'two', value: 2 },
        ]}
        label="numbers"
        filtered={false}
        onChange={val => console.log(val)}
      />
    </Col>
  </Row>
</Container>
```

##### Select fits to its parent width

```js
;<Select
  items={[
    { title: 'one', value: 1 },
    { title: 'two', value: 2 },
  ]}
  label="numbers"
  filtered={false}
  onChange={val => console.log(val)}
  block
/>
```

##### Select with error message

```js
;<Select
  status="error"
  items={[
    { title: 'one', value: 1 },
    { title: 'two', value: 2 },
  ]}
  label="numbers"
  filtered={false}
  onChange={val => console.log(val)}
  errorMessage="Поле обязательно для заполнения"
/>
```
