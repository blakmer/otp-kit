```js
<Slider
  min={10000}
  max={500000}
  step={1000}
  name="range"
  value={20000}
  unit='руб.'
  onChange={event => console.log(event.target.value)}
/>
```
