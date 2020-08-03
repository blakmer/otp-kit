##### Block with shadow

```js
import Grid from '../Grid'
const { Row, Col } = Grid
;<>
  <Row>
    <Col xl={8}>
      <Block padding={[16]} color="bg-grey-1" shadow="big" borderRadius={16}>
        Big shadow
      </Block>
    </Col>
    <Col xl={8}>
      <Block padding={[16]} color="bg-grey-1" shadow="normal" borderRadius={16}>
        Normal shadow
      </Block>
    </Col>
    <Col xl={8}>
      <Block padding={[16]} color="bg-grey-1" shadow="small" borderRadius={16}>
        Small shadow
      </Block>
    </Col>
  </Row>
</>
```

##### Membrane

```js
import Grid from '../Grid'
const { Row, Col } = Grid
;<>
  <Row
    style={{ background: '#EFF2F9', height: 100 }}
    justify="center"
    align="center">
    <Col xl={8}>
      <Block padding={[16]} color="bg-grey-3" membrane borderRadius={24}>
        Membrane
      </Block>
    </Col>
  </Row>
</>
```
