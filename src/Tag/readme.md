### Tag component

```js
import Grid from '../Grid'

const { Container, Row, Col } = Grid

;<Container>
  <Row justify="between">
    <Col md={2}>
      <Tag
        title="Tag title"
        fill="primary"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={2}>
      <Tag title="Tag title" fill="chart-purple" />
    </Col>
    <Col md={2}>
      <Tag title="Tag title" onRemove={() => console.log('tag')} />
    </Col>
    <Col md={2}>
      <Tag
        disabled
        fill="chart-purple"
        title="Disabled"
        onRemove={() => console.log('tag')}
      />
    </Col>
  </Row>
</Container>
```

### Tag component secondary

```js
import Grid from '../Grid'

const { Container, Row, Col } = Grid

;<Container>
  <Row justify="between">
    <Col md={2}>
      <Tag
        secondary
        fill="primary"
        title="green"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={2}>
      <Tag
        secondary
        fill="chart-purple"
        title="purple"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={2}>
      <Tag
        secondary
        fill="highlighted"
        title="orange"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={2}>
      <Tag
        secondary
        fill="chart-blue"
        title="blue"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={2}>
      <Tag
        secondary
        fill="error"
        title="red"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={2}>
      <Tag
        secondary
        fill="chart-yellow"
        title="yellow"
        onRemove={() => console.log('tag')}
      />
    </Col>
  </Row>
</Container>
```

### Tag component with HEX marker

```js
import Grid from '../Grid'

const { Container, Row, Col } = Grid

;<Container>
  <Row justify="between">
    <Col md={2}>
      <Tag fillHex="#FF7777" onRemove={() => console.log('tag')} />
    </Col>
    <Col md={2}>
      <Tag secondary fillHex="#77CC77" onRemove={() => console.log('tag')} />
    </Col>
    <Col md={2}>
      <Tag fillHex="#7777FF" onRemove={() => console.log('tag')} disabled />
    </Col>
  </Row>
</Container>
```
