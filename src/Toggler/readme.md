### Toggler component

```js
import Grid from '../Grid'
import Typography from '../Typography'

const { Row, Col } = Grid;
const column = { display: 'flex', flexDirection:'column', alignItems: 'center'};
const mt = { marginTop: '5px'};

<React.Fragment>
  <Row style={{marginBottom: '10px'}}>
    <Col md={4} style={column}>
      <i>On</i>
      <Toggler
        style={mt}
        onChange={event => console.log(event.target.className)}
        defaultChecked
      />
    </Col>
    <Col md={4} style={column}>
      <i>Off</i>
      <Toggler
        style={mt}
        onChange={event => console.log(event.target.className)}
      />
    </Col>
    <Col md={4} style={column}>
      <i>Disabled</i>
      <Toggler
        style={mt}
        onChange={event => console.log(event.target.className)}
        disabled
      />
    </Col>
    <Col md={4} style={column}>
      <i>Disabled checked</i>
      <Toggler
        style={mt}
        onChange={event => console.log(event.target.className)}
        defaultChecked
        disabled
      />
    </Col>
  </Row>
  <i style={{marginLeft: '10px'}}>Colored togglers</i>
  <Row style={mt}>
    <Col md={4} style={column}>
      <Toggler
        style={mt}
        onChange={event => console.log(event.target.className)}
        fill="chart-blue"
        defaultChecked
      />
    </Col>
    <Col md={4} style={column}>
      <Toggler
        style={mt}
        onChange={event => console.log(event.target.className)}
        fill="chart-yellow"
        defaultChecked
      />
    </Col>
    <Col md={4} style={column}>
      <Toggler
        style={mt}
        fill="chart-purple"
        onChange={event => console.log(event.target.className)}
        defaultChecked
      />
    </Col>
  </Row>

</React.Fragment>
```
