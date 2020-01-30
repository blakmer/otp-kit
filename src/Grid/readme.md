### Grid system based on library [React Grid System](https://github.com/sealninja/react-grid-system)

#### Simple container

```js
<Grid.Container fluid style={{ lineHeight: '32px' }}>
  <Grid.Row debug>
    <Grid.Col debug>1 of 2</Grid.Col>
    <Grid.Col debug>2 of 2</Grid.Col>
  </Grid.Row>
</Grid.Container>
```

#### Responsive container

```js
const { Container, Row, Col } = Grid
return (
  <Container fluid style={{ lineHeight: '32px' }}>
    <Row debug>
      <Col xs={6} sm={4} md={8} lg={6} xl={5} debug>
        xs=6 sm=4 md=8 lg=6 xl=5
      </Col>
      <Col xs={6} sm={8} md={4} lg={6} xl={7} debug>
        xs=6 sm=8 md=4 lg=6 xl=7
      </Col>
    </Row>
    <Row debug>
      <Col md={4} debug>
        md=4
      </Col>
      <Col md={4} debug>
        md=4
      </Col>
      <Col md={4} debug>
        md=4
      </Col>
    </Row>
  </Container>
)
```

#### Vertical alignment

```js
const { Container, Row, Col } = Grid
return (
  <Container fluid style={{ lineHeight: '32px' }}>
    <Row align="start" style={{ height: '75px' }} debug>
      <Col debug>1 of 3</Col>
      <Col debug>2 of 3</Col>
      <Col debug>3 of 3</Col>
    </Row>
    <br />
    <Row align="center" style={{ height: '75px' }} debug>
      <Col debug>1 of 3</Col>
      <Col debug>2 of 3</Col>
      <Col debug>3 of 3</Col>
    </Row>
    <br />
    <Row align="end" style={{ height: '75px' }} debug>
      <Col debug>1 of 3</Col>
      <Col debug>2 of 3</Col>
      <Col debug>3 of 3</Col>
    </Row>
    <br />
    <Row align="stretch" debug>
      <Col debug>1 of 3</Col>
      <Col debug>2 of 3</Col>
      <Col debug>3 of 3</Col>
    </Row>
  </Container>
)
```

#### Horizontal alignment

```js
const { Container, Row, Col } = Grid
return (
  <Container fluid style={{ lineHeight: '32px' }}>
    <Row justify="start" debug>
      <Col xs={3} debug>
        1 of 3
      </Col>
      <Col xs={3} debug>
        2 of 3
      </Col>
      <Col xs={3} debug>
        3 of 3
      </Col>
    </Row>
    <br />
    <Row justify="center" debug>
      <Col xs={3} debug>
        1 of 3
      </Col>
      <Col xs={3} debug>
        2 of 3
      </Col>
      <Col xs={3} debug>
        3 of 3
      </Col>
    </Row>
    <br />
    <Row justify="end" debug>
      <Col xs={3} debug>
        1 of 3
      </Col>
      <Col xs={3} debug>
        2 of 3
      </Col>
      <Col xs={3} debug>
        3 of 3
      </Col>
    </Row>
    <br />
    <Row justify="between" debug>
      <Col xs={3} debug>
        1 of 3
      </Col>
      <Col xs={3} debug>
        2 of 3
      </Col>
      <Col xs={3} debug>
        3 of 3
      </Col>
    </Row>
    <br />
    <Row justify="around" debug>
      <Col xs={3} debug>
        1 of 3
      </Col>
      <Col xs={3} debug>
        2 of 3
      </Col>
      <Col xs={3} debug>
        3 of 3
      </Col>
    </Row>
    <br />
    <Row justify="initial" debug>
      <Col xs={3} debug>
        1 of 3
      </Col>
      <Col xs={3} debug>
        2 of 3
      </Col>
      <Col xs={3} debug>
        3 of 3
      </Col>
    </Row>
    <br />
    <Row justify="inherit" debug>
      <Col xs={3} debug>
        1 of 3
      </Col>
      <Col xs={3} debug>
        2 of 3
      </Col>
      <Col xs={3} debug>
        3 of 3
      </Col>
    </Row>
  </Container>
)
```

#### Offsetting columns

```js
const { Container, Row, Col } = Grid
return (
  <Container fluid style={{ lineHeight: '32px' }}>
    <Row debug>
      <Col md={4} debug>
        md=4
      </Col>
      <Col md={4} offset={{ md: 4 }} debug>
        md=4 offset-md=4
      </Col>
    </Row>
    <br />
    <Row debug>
      <Col md={3} offset={{ md: 3 }} debug>
        md=3 offset-md=3
      </Col>
      <Col md={3} offset={{ md: 3 }} debug>
        md=3 offset-md=3
      </Col>
    </Row>
    <br />
    <Row debug>
      <Col md={6} offset={{ md: 3 }} debug>
        md=6 offset-md=3
      </Col>
    </Row>
  </Container>
)
```

#### Responsive utilities

```js
const { Row, Col, Hidden, Visible } = Grid

return (
  <Row>
    <Col xs={6} sm={2}>
      <Hidden xs>
        <div style={{ color: 'gray' }}>Extra small</div>
      </Hidden>
      <Visible xs>
        <div style={{ color: 'green' }}>Visible on extra small</div>
      </Visible>
    </Col>
    <Col xs={6} sm={2}>
      <Hidden sm>
        <div style={{ color: 'gray' }}>Small</div>
      </Hidden>
      <Visible sm>
        <div style={{ color: 'green' }}>Visible on small</div>
      </Visible>
    </Col>
    <Col xs={6} sm={2}>
      <Hidden md>
        <div style={{ color: 'gray' }}>Medium</div>
      </Hidden>
      <Visible md>
        <div style={{ color: 'green' }}>Visible on medium</div>
      </Visible>
    </Col>
    <Col xs={6} sm={2}>
      <Hidden lg>
        <div style={{ color: 'gray' }}>Large</div>
      </Hidden>
      <Visible lg>
        <div style={{ color: 'green' }}>Visible on large</div>
      </Visible>
    </Col>
    <Col xs={6} sm={2}>
      <Hidden xl>
        <div style={{ color: 'gray' }}>Extra large</div>
      </Hidden>
      <Visible xl>
        <div style={{ color: 'green' }}>Visible on extra large</div>
      </Visible>
    </Col>
  </Row>
)
```

More information you can found in [official documentation](https://github.com/sealninja/react-grid-system)
