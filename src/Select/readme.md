##### Controlled select

```js
import { useState, Fragment } from 'react'
const [a, set] = useState({ title: 'one', value: 1 })

;<Fragment>
  <Select
    items={[
      { title: 'one', value: 1 },
      { title: 'two', value: 2 },
      { title: 'tree', value: 3 },
    ]}
    label="numbers"
    value={a}
    onChange={val => set(val)}
  />
  <button onClick={() => set({ title: 'two', value: 2 })}>reset to two</button>
</Fragment>
```

##### Uncontrolled select

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

##### States of select

```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid
;<Container>
  <Row>
    <Col md={4}>
      <Select
        status="error"
        listDirection="top"
        items={[
          { title: 'one', value: 1 },
          { title: 'two', value: 2 },
        ]}
        label="numbers"
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
  onChange={val => console.log(val)}
  block
/>
```

##### Select with error message

```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid

;<Container>
  <Row align="center">
    <Col md={4}>
      <Select
        status="error"
        items={[
          { title: 'one', value: 1 },
          { title: 'two', value: 2 },
        ]}
        label="numbers"
        onChange={val => console.log(val)}
        errorMessage="Поле обязательно для заполнения"
      />
    </Col>
  </Row>
</Container>
```
