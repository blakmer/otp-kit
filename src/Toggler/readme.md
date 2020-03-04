### Toggler component

```js
<React.Fragment>
  <Toggler
    onChange={event => console.log(event.target.id)}
    id="switch"
    defaultChecked
  />
  <Toggler
    onChange={event => console.log(event.target.id)}
    id="switch-1"
    fill="blue"
    defaultChecked
    style={{ marginLeft: 10 }}
  />
  <Toggler
    onChange={event => console.log(event.target.id)}
    id="switch-2"
    fill="yellow"
    defaultChecked
    style={{ marginLeft: 10 }}
  />
  <Toggler
    onChange={event => console.log(event.target.id)}
    id="switch-3"
    fill="purple"
    defaultChecked
    style={{ marginLeft: 10 }}
  />
  <Toggler
    onChange={event => console.log(event.target.id)}
    id="switch-4"
    disabled
    fill="purple"
    style={{ marginLeft: 10 }}
  />
</React.Fragment>
```
