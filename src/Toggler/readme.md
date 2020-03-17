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
    defaultChecked
    style={{ marginLeft: 10 }}
  />
  <Toggler
    onChange={event => console.log(event.target.className)}
    fill="yellow"
    defaultChecked
    style={{ marginLeft: 10 }}
  />
  <Toggler
    onChange={event => console.log(event.target.className)}
    fill="purple"
    defaultChecked
    style={{ marginLeft: 10 }}
  />
  <Toggler
    onChange={event => console.log(event.target.className)}
    disabled
    fill="purple"
    style={{ marginLeft: 10 }}
  />
</React.Fragment>
```
