```js
<div>
  <div>
    <h1>Row</h1>
    <RadioGroup
      onChange={event => console.log(event.target.value)}
      name="group-1"
      data={[
        { label: 'Group element', value: 'first', defaultChecked: true },
        { label: 'Group element', value: 'second' },
        { label: 'Group element', value: 'third' },
      ]}
    />
  </div>
  <div>
    <h1>Column</h1>
    <RadioGroup
      name="group-2"
      direction="column"
      onChange={event => console.log(event.target.value)}
      data={[
        { label: 'Group element', value: 'first', defaultChecked: true },
        { label: 'Group element', value: 'second' },
        { label: 'Group element', value: 'third' },
      ]}
    />
  </div>
  <div>
    <h1>Disabled</h1>
    <RadioGroup
      name="group-3"
      direction="column"
      data={[
        {
          label: 'Group element',
          value: 'first',
          defaultChecked: true,
          disabled: true,
        },
        { label: 'Group element', value: 'second', disabled: true },
      ]}
    />
  </div>
</div>
```
