```js
import Grid from '../Grid'
const { Row, Col } = Grid;
const mt = 10

;<div>
  <Row style={{marginTop: mt}}>
    <Col md={6} >
      <Checkbox id="first" >
        Checkbox
      </Checkbox>
    </Col>
      <Col md={6}>
      <Checkbox id="second" defaultChecked>
        Checked
      </Checkbox>
    </Col>
    <Col md={6}>
      <Checkbox disabled id="second">
        Disabled
      </Checkbox>
    </Col>
  </Row>
  <Row style={{marginTop: mt}}>
  <Col md={6}>
    <Checkbox id="third" defaultChecked fill='chart-blue'>
      Chart blue
    </Checkbox>
  </Col>
  <Col md={6}>
    <Checkbox id="fourth" defaultChecked fill='chart-yellow'>
      Chart yellow
    </Checkbox>
  </Col>
<Col md={6}>
    <Checkbox id="fifth" defaultChecked fill='chart-purple'>
      Chart purple
    </Checkbox>
  </Col>
</Row>
</div>
```

```js
import React, { useState } from 'react'
const [checked, setChecked] = useState(undefined)
;<Checkbox id="A" 
indeterminate={(checked===undefined)}
checked={checked}
onChange={()=>{setChecked(!checked)}}
>
  Indeterminate Checkbox
</Checkbox>
```