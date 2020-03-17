### Tag component

```js
import Grid from '../Grid'

const { Container, Row, Col } = Grid

;<Container>
  <Row justify="between">
    <Col md={2}>
      <Tag
        title="Tag title"
        marker="green"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={2}>
      <Tag title="Tag title" marker="purple" />
    </Col>
    <Col md={2}>
      <Tag title="Tag title" onRemove={() => console.log('tag')} />
    </Col>
    <Col md={2}>
      <Tag
        disabled
        marker="purple"
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
        marker="green"
        title="green"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={2}>
      <Tag
        secondary
        marker="purple"
        title="purple"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={2}>
      <Tag
        secondary
        marker="orange"
        title="orange"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={2}>
      <Tag
        secondary
        marker="blue"
        title="blue"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={2}>
      <Tag
        secondary
        marker="red"
        title="red"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={2}>
      <Tag
        secondary
        marker="yellow"
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
      <Tag markerHEX="#333" onRemove={() => console.log('tag')} />
    </Col>
    <Col md={2}>
      <Tag secondary markerHEX="#333" onRemove={() => console.log('tag')} />
    </Col>
    <Col md={2}>
      <Tag markerHEX="#333" onRemove={() => console.log('tag')} disabled />
    </Col>
  </Row>
</Container>
```
