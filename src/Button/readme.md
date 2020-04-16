```js
const mt = 10
const wrapper = { display: 'flex' }

;<React.Fragment>
  <h1>Primary Buttons</h1>
  <div style={{ ...wrapper }}>
    <Button fill="primary">Primary typari koeho palandra morty</Button>
    <Button fill="highlighted">Highlighted</Button>
    <Button fill="error">Error</Button>
    <Button fill="blue">Blue</Button>
    <Button disabled>Disabled</Button>
  </div>

  <h1>Secondary Buttons</h1>
  <div style={{ ...wrapper }}>
    <Button fill="primary" ghost>
      Primary
    </Button>
    <Button fill="highlighted" ghost>
      Highlighted
    </Button>
    <Button fill="error" ghost>
      Error
    </Button>
    <Button fill="blue" ghost>
      Blue
    </Button>
    <Button disabled ghost>
      Disabled
    </Button>
  </div>

  <h1>Floating Buttons</h1>
  <div style={{ marginTop: mt }}>
    <Button fill="primary" floating>
      Floating
    </Button>
  </div>

  <h1>Small Buttons</h1>
  <div style={{ marginTop: mt, ...wrapper }}>
    <Button fill="primary" size="small">
      Primary
    </Button>
    <Button fill="highlighted" size="small">
      Highlighted
    </Button>
    <Button fill="error" size="small">
      Error
    </Button>
    <Button fill="blue" size="small">
      Blue
    </Button>
    <Button size="small" disabled>
      Disabled
    </Button>
  </div>
  <div style={{ marginTop: mt, ...wrapper }}>
    <Button fill="primary" size="small" ghost>
      Primary
    </Button>
    <Button fill="highlighted" size="small" ghost>
      Highlighted
    </Button>
    <Button fill="error" size="small" ghost>
      Error
    </Button>
    <Button fill="blue" size="small" ghost>
      Blue
    </Button>
    <Button size="small" disabled ghost>
      Disabled
    </Button>
  </div>

  <h1>Primary Buttons with icons</h1>
  <div style={{ marginTop: mt, ...wrapper }}>
    <Button fill="primary" suffix="arrow-right">
      Primary
    </Button>
    <Button fill="highlighted" prefix="arrow-right">
      Highlighted
    </Button>
    <Button fill="error" suffix="arrow-right">
      Error
    </Button>
    <Button fill="blue" prefix="arrow-right">
      Blue
    </Button>
    <Button disabled suffix="arrow-right">
      Disabled
    </Button>
  </div>

  <h1>Button fits to its parent width</h1>
  <div style={{ marginTop: mt, ...wrapper }}>
    <Button fill="primary" block>
      Block
    </Button>
  </div>
</React.Fragment>
```
