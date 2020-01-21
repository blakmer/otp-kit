```js
const mt = 10
const wrapper = { display: 'flex' }

;<React.Fragment>
  <h1>Primary Buttons</h1>
  <div style={{ ...wrapper }}>
    <Button variation="primary">Primary typari koeho palandra morty</Button>
    <Button variation="highlighted">Highlighted</Button>
    <Button variation="error">Error</Button>
    <Button variation="blue">Blue</Button>
    <Button disabled>Disabled</Button>
  </div>

  <h1>Secondary Buttons</h1>
  <div style={{ ...wrapper }}>
    <Button variation="primary" ghost>Primary</Button>
    <Button variation="highlighted" ghost>Highlighted</Button>
    <Button variation="error" ghost>Error</Button>
    <Button variation="blue" ghost>Blue</Button>
    <Button disabled ghost>Disabled</Button>
  </div>

  <h1>Floating Buttons</h1>
  <div style={{ marginTop: mt }}>
    <Button variation="primary" floating>
      Floating
    </Button>
  </div>

  <h1>Small Buttons</h1>
  <div style={{ marginTop: mt, ...wrapper }}>
    <Button variation="primary" size="small">
      Primary
    </Button>
    <Button variation="highlighted" size="small">
      Highlighted
    </Button>
    <Button variation="error" size="small">
      Error
    </Button>
    <Button variation="blue" size="small">
      Blue
    </Button>
    <Button size="small" disabled>
      Disabled
    </Button>
  </div>
  <div style={{ marginTop: mt, ...wrapper }}>
    <Button variation="primary" size="small" ghost>
      Primary
    </Button>
    <Button variation="highlighted" size="small" ghost>
      Highlighted
    </Button>
    <Button variation="error" size="small" ghost>
      Error
    </Button>
    <Button variation="blue" size="small" ghost>
      Blue
    </Button>
    <Button size="small" disabled ghost>
      Disabled
    </Button>
  </div>

 <h1>Primary Buttons with icons</h1>
  <div style={{ marginTop: mt, ...wrapper }}>
    <Button variation="primary" suffix='arrow-right'>
      Primary
    </Button>
    <Button variation="highlighted" prefix='arrow-right'>
      Highlighted
    </Button>
    <Button variation="error" suffix='arrow-right'>
      Error
    </Button>
    <Button variation="blue" prefix='arrow-right'>
      Blue
    </Button>
    <Button disabled suffix='arrow-right'>
      Disabled
    </Button>
  </div>

</React.Fragment>
```
