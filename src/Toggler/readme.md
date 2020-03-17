### Toggler component

```js
<React.Fragment>
  <Toggler
    onChange={event => console.log(event.target.className)}
    defaultChecked
  />
  <Toggler
    onChange={event => console.log(event.target.className)}
    fill="blue"
    style={{ marginLeft: 10 }}
    defaultChecked
  />
  <Toggler
    onChange={event => console.log(event.target.className)}
    fill="yellow"
    style={{ marginLeft: 10 }}
    defaultChecked
  />
  <Toggler
    onChange={event => console.log(event.target.className)}
    fill="purple"
    style={{ marginLeft: 10 }}
    defaultChecked
  />
  <Toggler
    onChange={event => console.log(event.target.className)}
    fill="purple"
    style={{ marginLeft: 10 }}
    disabled
  />
  <Toggler
    onChange={event => console.log(event.target.className)}
    fill="purple"
    style={{ marginLeft: 10 }}
    defaultChecked
    disabled
  />
</React.Fragment>
```
