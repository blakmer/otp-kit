```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid
const column = {display: 'flex', flexDirection: 'column'}

;<Container>
  <Row>
    <Col md={2} style={column}>
        <i>Small</i>
        <Spinner size="small"/>
    </Col>
    <Col md={2} style={column}>
        <i>Medium</i>
        <Spinner/>
    </Col>
    <Col md={2} style={column}>
        <i>Large</i>
        <Spinner size="large"/>
    </Col>
  </Row>
  <Row>
    <Col md={2} style={column}>
        <i>Colored</i>
        <Spinner size="large" fill="error" />
    </Col>
    <Col md={2} style={column}>
        <i>Clickable</i>
        <Spinner size="large" fill="blue" onClick={()=>{console.log('click')}}/>
    </Col>
  </Row>
</Container>
```
