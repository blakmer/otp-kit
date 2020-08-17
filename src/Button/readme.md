```js
import Grid from '../Grid'
const {Row, Col} = Grid

;<React.Fragment>
  <h1>Primary Buttons</h1>
  <Row>
    <Col md={4}>
      <Button fill="primary" block>Primary</Button> 
    </Col>
    <Col md={4}>
      <Button fill="highlighted" block>Highlighted</Button>
    </Col>
    <Col md={4}>
      <Button fill="error" block>Error</Button>
    </Col>
    <Col md={4}>
      <Button fill="blue" block>Blue</Button>
    </Col>
    <Col md={4}>
      <Button disabled block>Disabled</Button>
    </Col>
  </Row>

  <h1>Secondary Buttons</h1>
  <Row>
    <Col md={4}>
      <Button fill="primary" ghost block>Primary</Button>
    </Col>
    <Col md={4}>
      <Button fill="highlighted" ghost block>Highlighted</Button>
    </Col>
    <Col md={4}>
      <Button fill="error" ghost block>Error</Button>
    </Col>
    <Col md={4}>
      <Button fill="blue" ghost block>Blue</Button>
    </Col>
    <Col md={4}>
      <Button disabled ghost block>Disabled</Button>
    </Col>
  </Row>

  <h1>Floating Buttons</h1>
  <Row>
    <Col md={4}><Button fill="primary" floating block>Floating</Button></Col>
  </Row>

  <h1>Small Buttons</h1>
  <Row>
    <Col md={4}>
      <Button fill="primary" size="small">Primary</Button>
    </Col>
    <Col md={4}>
      <Button fill="highlighted" size="small">Highlighted</Button>
    </Col>
    <Col md={4}>
      <Button fill="error" size="small">Error</Button>
    </Col>
    <Col md={4}>
      <Button fill="blue" size="small">Blue</Button>
    </Col>
    <Col md={4}>
      <Button size="small" disabled>Disabled</Button>
    </Col>
  </Row>
  <Row style={{marginTop: '1rem'}}>
    <Col md={4}>
      <Button fill="primary" size="small" ghost>Primary</Button>
    </Col>
    <Col md={4}>
      <Button fill="highlighted" size="small" ghost>Highlighted</Button>
    </Col>
    <Col md={4}>
      <Button fill="error" size="small" ghost>Error</Button>
    </Col>
    <Col md={4}>
      <Button fill="blue" size="small" ghost>Blue</Button>
    </Col>
    <Col md={4}>
      <Button size="small" disabled ghost>Disabled</Button>
    </Col>
  </Row>
  <h1>Primary Buttons with icons</h1>
  <Row>
    <Col md={4} sm={6}>
      <Button block fill="primary" suffix="arrow-right">Primary</Button>
    </Col>
    <Col md={4}>
      <Button block fill="highlighted" prefix="arrow-right">Highlighted</Button>
    </Col>
    <Col md={4}>
      <Button block fill="error" suffix="arrow-right">Error</Button>
    </Col>
    <Col md={4}>
      <Button block fill="blue" prefix="arrow-right">Blue</Button>
    </Col>
    <Col md={4}>
      <Button block disabled suffix="arrow-right">Disabled</Button>
    </Col>
  </Row>
</React.Fragment>
```
