#### IconDoc component

```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid

;<Container>
  <Row>
    <Col style={{ textAlign: 'center' }}>
      <IconDoc>DOC</IconDoc>
      <div style={{ wordWrap: 'break-word' }}>file.doc</div>
    </Col>
    <Col style={{ textAlign: 'center' }}>
      <IconDoc>XLS</IconDoc>
      <div style={{ wordWrap: 'break-word' }}>file.xls</div>
    </Col>
    <Col style={{ textAlign: 'center' }}>
      <IconDoc>ZIP</IconDoc>
      <div style={{ wordWrap: 'break-word' }}>file.zip</div>
    </Col>
    <Col style={{ textAlign: 'center' }}>
      <IconDoc>JPEG</IconDoc>
      <div style={{ wordWrap: 'break-word' }}>file.jpeg</div>
    </Col>
    <Col style={{ textAlign: 'center' }}>
      <IconDoc>AVI</IconDoc>
      <div style={{ wordWrap: 'break-word' }}>file.avi</div>
    </Col>
    <Col style={{ textAlign: 'center' }}>
      <IconDoc>PDF</IconDoc>
      <div style={{ wordWrap: 'break-word' }}>file.pdf</div>
    </Col>
    <Col style={{ textAlign: 'center' }}>
      <IconDoc>TXT</IconDoc>
      <div style={{ wordWrap: 'break-word' }}>file.txt</div>
    </Col>
  </Row>
</Container>