RoundProgress

```js
const [val, setVal] = React.useState(1)
;<React.Fragment>
  <input
    value={val}
    onChange={e => setVal(e.target.value)}
    type="number"
    step={1}
    min={0}
    max={100}
  />
  <br />
  <br />

  <RoundProgress progress={val} />
</React.Fragment>
```

```js
<RoundProgress progress={10} />
```

```js
<RoundProgress progress={20} />
```

```js
<RoundProgress progress={40} />
```

```js
<RoundProgress progress={100} />
```
