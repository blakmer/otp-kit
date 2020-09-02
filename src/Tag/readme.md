### Tag regular component

```js
import Grid from '../Grid'

const { Container, Row, Col } = Grid

;<Container>
  <Row justify="between">
    <Col md={4}>
      <Tag
        title="Tag title"
        fill="primary"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={4}>
      <Tag title="Tag title" fill="chart-purple" />
    </Col>
    <Col md={4}>
      <Tag title="Tag title" fill="highlighted" onRemove={() => console.log('tag')} />
    </Col>
    <Col md={4}>
      <Tag
        fill="error"
        title="Disabled"
        onRemove={() => console.log('tag')}
      />
    </Col>
  </Row>
</Container>
```

### Tag component with ghost and marker

```js
import Grid from '../Grid'

const { Container, Row, Col } = Grid

;<Container>
  <Row justify="between">
    <Col md={4}>
      <Tag
        ghost
        hasMarker
        fill="primary"
        title="Green"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={4}>
      <Tag
        ghost
        hasMarker
        fill="chart-purple"
        title="Purple"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={4}>
      <Tag
        ghost
        hasMarker
        fill="highlighted"
        title="Orange"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={4}>
      <Tag
        ghost
        hasMarker
        fill="chart-blue"
        title="Blue"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={4}>
      <Tag
        ghost
        hasMarker
        fill="error"
        title="Red"
        onRemove={() => console.log('tag')}
      />
    </Col>
    <Col md={4}>
      <Tag
        ghost
        hasMarker
        fill="chart-yellow"
        title="Yellow"
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
    <Col md={4}>
      <Tag fillHex="#FF7777" hasMarker onRemove={() => console.log('tag')} />
    </Col>
    <Col md={4}>
      <Tag ghost fillHex="#77CC77" hasMarker onRemove={() => console.log('tag')} />
    </Col>
    <Col md={4}>
      <Tag fillHex="#7777FF" hasMarker onRemove={() => console.log('tag')} disabled />
    </Col>
  </Row>
</Container>
```
